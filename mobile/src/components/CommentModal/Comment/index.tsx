import { View, Pressable, Image, Text } from "react-native"
import IComment from "../../../interfaces/IComment"
import styles from "./styles"

const Comment : React.FC<{data : IComment}> = ({ data }) => {

    return (
        <View style={styles.comment}>
            <Image style={styles.profilePic} source={{ uri : data.writter.profilePicUrl }} />
            <View style={styles.content}>
                <Text style={styles.writterName}>{data.writter.name}</Text>
                <Text style={styles.textContent}>{data.content}</Text>

                <View>
                    <Pressable>
                        <Text style={styles.optionText}>Responder</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default Comment