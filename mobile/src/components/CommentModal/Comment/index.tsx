import { MaterialIcons } from "@expo/vector-icons"
import { View, Pressable, Image, Text, FlatList, Alert } from "react-native"
import IComment from "../../../interfaces/IComment"
import colors from "../../../styles/colors"
import styles from "./styles"

import * as postService from '../../../services/post.service'
import { useState } from "react"

interface ICommentProps {
    data : IComment,
    onAnswer : () => void
}

const Comment : React.FC<ICommentProps> = ({ data, onAnswer }) => {

    const [liked, setLiked] = useState(data.alreadyHearted)

    const giveLike = async () => {
        await postService.addHeartToComment(data.id)

        setLiked(!liked)
    }

    return (
        <View>
            <View style={styles.comment}>
                <Image style={styles.profilePic} source={{ uri : data.writter.profilePicUrl }} />
                <View style={styles.content}>
                    <Text style={styles.writterName}>{data.writter.name}</Text>
                    <Text style={styles.textContent}>{data.content}</Text>

                    <View style={styles.commentOptions}>
                        <Pressable onPress={onAnswer}>
                            <Text style={styles.optionText}>Responder</Text>
                        </Pressable>
                        <Pressable onPress={giveLike} style={{flexDirection : 'row', alignItems : 'center'}}>
                            <Text style={styles.optionText}>{(liked && !data.alreadyHearted) ? data.hearts+1 : (!liked && data.alreadyHearted) ? data.hearts-1: data.hearts}</Text>
                            <MaterialIcons name='favorite' size={20} color={(liked) ? colors.PRIMARY : colors.LIGHT_GRAY} />
                        </Pressable>
                    </View>
                </View>
            </View>

            <FlatList 
                data={data.answers}
                renderItem={({item}) => 
                    <View style={[styles.comment, {marginLeft : 48}]}>
                        <Image style={styles.profilePic} source={{ uri : data.writter.profilePicUrl }} />
                        <View style={styles.content}>
                            <Text style={styles.writterName}>{data.writter.name}</Text>
                            <Text style={styles.textContent}>{data.content}</Text>
                        </View>
                    </View>
                }
                />
        </View>
        
    )
}

export default Comment