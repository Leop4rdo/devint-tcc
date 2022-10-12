import { MaterialIcons } from "@expo/vector-icons"
import { useEffect, useState } from "react"
import { Alert, Image, Pressable, Text, View } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import IComment from "../../interfaces/IComment"
import colors from "../../styles/colors"
import FeedbackTextInput from "../shared/FeedbackInput"
import styles from "./styles"
import * as postService from '../../services/post.service'


const Comment : React.FC<{data : IComment}> = ({ data }) => {

    return (
        <View style={styles.comment}>
            <Image style={styles.profilePic} source={{ uri : data.writter.profilePicUrl }} />
            <View>
                <Text>{data.writter.name}</Text>
                <Text>{data.content}</Text>

                <View>
                    <Pressable>
                        <Text>Responder</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

interface ICommentModalProps {
    postId : string
    onClose : () => void
}

const CommentModal : React.FC<ICommentModalProps> = ({ postId, onClose }) => {
    const [comments, setComments] = useState<IComment[]>([])

    const getComments = async () => {
        console.log(postId )
        const res = await postService.getById(postId)

        if (res.hasError !== false)
            return Alert.alert('Erro ao carregar comentários!')
 
        setComments(res.data.comments)
    }

    useEffect(() => { getComments() }, [postId])

    return (
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
                ListHeaderComponent={
                    <View style={styles.newCommentContainer}>
                        <Image source={{ uri : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1024px-Cat03.jpg'}} style={styles.profilePic}/>
                        <FeedbackTextInput 
                            style={styles.newCommentInput}
                            onChangeText={(text) => {}} 
                            placeholder='Adicione um comentario' 
                        />
                        <Pressable>
                            <MaterialIcons name='send' size={24} color='#FFF'/>
                        </Pressable>
                    </View>
                }
                data={comments}
                renderItem={({item}) => <Comment key={`comment${item.id}-${Math.random()*999}`} data={item} />}
                />
        </View>
    )
}

export default CommentModal