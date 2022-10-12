import { MaterialIcons } from "@expo/vector-icons"
import { Image, Pressable, Text, View } from "react-native"
import colors from "../../styles/colors"
import FeedbackTextInput from "../shared/FeedbackInput"
import styles from "./styles"


const CommentModal : React.FC = () => {

    return (
        <View style={styles.modal}>
            <View style={styles.header}>
                <View style={{flexDirection : 'row', alignItems : 'center'}}>
                    <Text style={styles.boldText}>Comentários</Text>
                    <Text style={styles.commentAmount}>9999</Text>
                </View>

                <Pressable>
                    <MaterialIcons name="close" size={32} color='#FFF'/>
                </Pressable>
            </View>

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
        </View>
    )
}

export default CommentModal