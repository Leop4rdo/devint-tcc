import { MaterialIcons } from "@expo/vector-icons"
import { useEffect, useState } from "react"
import { Alert, Image, Pressable, Text, View } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import IComment from "../../interfaces/IComment"
import colors from "../../styles/colors"
import FeedbackTextInput from "../shared/FeedbackInput"
import styles from "./styles"
import * as postService from '../../services/post.service'
import Comment from "./Comment"
import { withDecay } from "react-native-reanimated"
import AddCommentModal from "./AddComment"

interface ICommentModalProps {
    postId : string
    onClose : () => void
}

const CommentModal : React.FC<ICommentModalProps> = ({ postId, onClose }) => {
    const [comments, setComments] = useState<IComment[]>([])
    const [writting, setWritting] = useState(false)

    const getComments = async () => {
        console.log(postId )
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
                        <Text style={styles.commentAmount}>9999</Text>
                    </View>

                    <Pressable onPress={onClose}>
                        <MaterialIcons name="close" size={32} color='#FFF'/>
                    </Pressable>
                </View>

                <FlatList 
                    contentContainerStyle={{flex : 1}}
                    ListHeaderComponent={
                        <Pressable style={styles.newCommentContainer} onPress={() => setWritting(true)}>
                            <Image source={{ uri : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1024px-Cat03.jpg'}} style={styles.profilePic}/>
                            <View style={styles.fakeInput}>
                                <Text style={styles.fakeInputText}>Adicione um comentário</Text>
                            </View>
                        </Pressable>
                    }
                    data={comments}
                    renderItem={({item}) => 
                        <Comment key={`comment${item.id}-${Math.random()*999}`} data={item} />
                    }
                    />
            </View>

            { writting && <AddCommentModal onClose={() => setWritting(false)} /> }
        </View>
    )
}

export default CommentModal