import { MaterialIcons } from "@expo/vector-icons"
import { useState } from "react"
import { KeyboardAvoidingView, Pressable, View } from "react-native"
import colors from "../../../styles/colors"
import FeedbackTextInput from "../../shared/FeedbackInput"

import * as postService from '../../../services/post.service'
import styles from "./style"

interface IAddCommentModalProps {
    onClose : () => void
    parentId : string
    parentType : 'COMMENT' | 'POST'
}

const AddCommentModal : React.FC<IAddCommentModalProps> = ({ onClose, parentId, parentType  }) => {
    const [content, setContent] = useState("")

    const create = async () => {
        if (parentType === 'POST') {
            await postService.addComment({ content }, parentId)
        } else {
            await postService.addAnswer({ content }, parentId)
        }

        onClose()
    }

    return (
        <KeyboardAvoidingView style={styles.wrapper}>
            <Pressable onPress={onClose} style={styles.outsidePressHandler}/>

            <View style={styles.form}>
                <FeedbackTextInput autoFocus value={content} style={styles.input} onChangeText={(text) => setContent(text)} placeholder='Escreva um novo comentario' />

                <Pressable onPress={create}>
                    <MaterialIcons name="send" size={32} color={colors.PRIMARY} />
                </Pressable>
            </View>
        </KeyboardAvoidingView>
    )
}

export default AddCommentModal