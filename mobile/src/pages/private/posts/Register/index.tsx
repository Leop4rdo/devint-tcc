import {MaterialIcons} from "@expo/vector-icons"
import { useContext, useState } from "react"
import {Alert, Image, KeyboardAvoidingView, Pressable, Text, View} from "react-native"
import { ScrollView, TextInput } from "react-native-gesture-handler"
import ButtonComponent from "../../../../components/shared/Button"
import { AuthContext } from "../../../../store/context/Auth.context"
import colors from "../../../../styles/colors"
import styles from "./style"
import * as ImagePicker from 'expo-image-picker'
import firebase from '../../../../config/firebase'
import * as postService from "../../../../services/post.service"

const PostRegisterPage : React.FC<{ navigation : any }> = ({navigation}) => {
    const [attachments, setAttachments] = useState<string[]>([])
    const [content, setContent] = useState('')
    const [uploading, setUploading] = useState(false)

    const authContext = useContext(AuthContext)
    
    const placeholders = [
        'ex : Eu acho que ninguem deveria usar PH...',
        'ex : Consegui meu primeiro emprego!',
        'Diga-nos algo',
        'Oque tem para nos dizer hoje?',
        'Oque você aprendeu hoje?',
        'ex : Hoje eu fiz...'
    ]

    const getRandomPlaceholder = () => placeholders[Math.floor(Math.random() * placeholders.length)]

    const pickImage = async () => {
        if (uploading) return

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing : true,
            quality : 1
        });

        if (!result.cancelled)

        upload(result.uri)
    }

    const upload = async (uri : string) => {
        setUploading(true)

        try {
            const res = await fetch(uri)
            const blob = await res.blob()
            const fileName = uri.substring(uri.lastIndexOf('/')+1)

            const uploaded = await firebase.storage().ref().child('attachments/').child(fileName).put(blob)

            setAttachments([
                ...attachments,    
                await uploaded.ref.getDownloadURL()
            ])
        } catch (err) {
            console.log(err)
            Alert.alert('Houve um erro inesperado ao fazer upload!')
        }

        setUploading(false)
    }

    const removeImage = (uri : string) => {
        setAttachments(attachments.filter((_uri) => uri != uri))
    }

    const publish = async () => {
        if (!content || uploading) return

        const body = {
            content : content,
            attachments : attachments
        }

        const res = await postService.create(body)

        if (res.hasError) return Alert.alert('Houve um erro inesperado ao publicar, tente novamente mais tarde!')

        navigation.goBack()
    }

    return (
        <KeyboardAvoidingView style={styles.page}>
            <View style={styles.header}>
                <View style={styles.headerLeftContainer}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <MaterialIcons name="keyboard-arrow-left" color="#FFF" size={32} />
                    </Pressable>
                    <Text style={styles.title}>Nova publicação</Text>
                </View>

                <ButtonComponent 
                    textStyle={(content && !uploading) ? styles.publishButtonText : styles.publishButtonTextDisabled} 
                    style={(content && !uploading) ? styles.publishButton : styles.publishButtonDisabled}
                    onPress={publish} 
                    text='publicar'/>
            </View>

            <View style={styles.profileContainer}>
                <Image source={{uri : authContext?.userData?.profilePicUrl}} style={styles.profileImg}/>
                <View>
                    <Text style={styles.username}>{authContext?.userData?.name}</Text>
                </View>
            </View> 

            <TextInput 
                multiline 
                placeholderTextColor={colors.LIGHT_GRAY} 
                style={styles.textArea} 
                placeholder={getRandomPlaceholder()}
                onChangeText={(text) => setContent(text)}
                value={content}
            />

            <View style={styles.imgContainer}>
                <ScrollView horizontal centerContent>
                    {
                        attachments.map((_uri : string, idx : number) =>
                            <Pressable onPress={() => removeImage(_uri)} key={`${_uri}-${idx}`} >
                                <Image source={{uri : _uri}} resizeMode="contain" style={styles.imgPreview}/>
                            </Pressable>
                        )
                    }
                </ScrollView>
            </View>

            <View style={styles.footer}>
                <Pressable onPress={pickImage}>
                    <MaterialIcons name="image" size={32} color={(uploading) ? colors.GRAY : colors.PRIMARY}/>
                </Pressable>
            </View>
        </KeyboardAvoidingView>
    )
}

export default PostRegisterPage
