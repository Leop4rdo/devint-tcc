import { MaterialIcons } from "@expo/vector-icons"
import { useContext, useEffect, useState } from "react"
import { Alert, Image, Pressable, Text, View } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import IComment from "../../interfaces/IComment"
import colors from "../../styles/colors"
import FeedbackTextInput from "../shared/FeedbackInput"
import styles from "./styles"
import * as postService from '../../services/post.service'
import { withDecay } from "react-native-reanimated"
import AddCommentModal from "./AddComment"
import Comment from "./Comment"
import { AuthContext } from "../../store/context/Auth.context"

interface ICommentModalProps {
    postId : string
    onClose : () => void
}

const CommentModal : React.FC<ICommentModalProps> = ({ postId, onClose }) => {
    const authContext = useContext(AuthContext)

    const [comments, setComments] = useState<IComment[]>([])
    const [currentModal, setCurrentModal] = useState<{ visible : boolean, parentId : string, parentType : 'POST' | 'COMMENT'}>({
        visible : false,
        parentId : '',
        parentType : 'POST'
    })

    const getComments = async () => {
        const res = await postService.getById(postId)

        if (res.hasError !== false)
            return Alert.alert('Erro ao carregar comentários!')
 
        setComments(res.data.comments)
    }

    useEffect(() => { getComments() }, [postId])

    return (
        <View style={styles.wrapper}>
            <Pressable style={styles.outsidePressHandler} onPress={onClose}></Pressable>

            <View style={styles.modal}>
                <View style={styles.header}>
                    <View style={{flexDirection : 'row', alignItems : 'center'}}>
                        <Text style={styles.boldText}>Comentários</Text>
                        <Text style={styles.commentAmount}>{comments.length}</Text>
                    </View>

                    <Pressable onPress={onClose}>
                        <MaterialIcons name="close" size={32} color='#FFF'/>
                    </Pressable>
                </View>
                <Pressable style={styles.newCommentContainer} onPress={() => setCurrentModal({visible : true, parentId : postId, parentType : 'POST'})}>
                    <Image source={{ uri : authContext?.userData?.profilePicUrl}} style={styles.profilePic}/>
                    <View style={styles.fakeInput}>
                        <Text style={styles.fakeInputText}>Adicione um comentário</Text>
                    </View>
                </Pressable>

                <FlatList 
                    data={comments}
                    renderItem={({item}) => 
                        <Comment 
                            key={`comment${item.id}-${Math.random()*999}`} 
                            data={item} 
                            onAnswer={() => setCurrentModal({visible : true, parentId : item.id, parentType : 'COMMENT'})}
                        />
                    }
                    />
            </View>

            { 
                currentModal.visible && 
                <AddCommentModal 
                    parentId={currentModal.parentId} 
                    parentType={currentModal.parentType} 
                    onClose={() => { 
                        setCurrentModal({...currentModal, visible : false}); 
                        getComments() 
                    }} 
                /> 
            }
        </View>
    )
}

export default CommentModal