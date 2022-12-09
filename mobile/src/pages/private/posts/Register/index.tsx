import {MaterialIcons} from "@expo/vector-icons"
import { useContext, useEffect, useState } from "react"
import {Alert, Image, KeyboardAvoidingView, Pressable, Text, View} from "react-native"
import { ScrollView, TextInput } from "react-native-gesture-handler"
import ButtonComponent from "../../../../components/shared/Button"
import { AuthContext } from "../../../../store/context/Auth.context"
import PickerComponent from "../../../../components/shared/Picker"
import * as ImagePicker from 'expo-image-picker'


import styles from "./style"
import colors from "../../../../styles/colors"
import firebase from '../../../../config/firebase'
import * as postService from "../../../../services/post.service"
import * as projectService from "../../../../services/project.service";
import IProject from "../../../../interfaces/IProject"
import { Picker } from "@react-native-picker/picker"
import { ALERT_TYPE, Toast } from "react-native-alert-notification"

const PostRegisterPage : React.FC<{ navigation : any }> = ({navigation}) => {
    const [attachments, setAttachments] = useState<string[]>([])
    const [content, setContent] = useState('')
    const [uploading, setUploading] = useState(false)
    const [projects, setProjects] = useState<IProject[]>([])
    const [selectedProject, setSelectedProject] = useState('')

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
            Toast.show({ type : ALERT_TYPE.DANGER, title : 'Erro ao fazer upload!'})
        }

        setUploading(false)
    }

    const removeImage = (uri : string) => {
        setAttachments(attachments.filter((_uri) => uri != uri))
    }
    console.log(selectedProject)

    const publish = async () => {
        if (!content || uploading) {

            Toast.show({ type : ALERT_TYPE.DANGER, title : 'Ainda estamos fazendo upload!'})
            return
        }
            
        console.log()

        const body = {
            content : content,
            attachments : attachments,
            project : (selectedProject.length >= 1) ? { id : selectedProject } : undefined
        }

        const res = await postService.create(body)

        if (res.hasError) 
            Toast.show({ type : ALERT_TYPE.DANGER, title : 'Erro ao publicar! tente novamente mais tarde'})


        navigation.goBack()
    }

    const getProjects = async () => {
        const res = await projectService.listMinimal(authContext?.userData.id)

        setProjects((res.data || []) as IProject[] )
    }

    useEffect(() => {getProjects()}, [])

    return (
        <KeyboardAvoidingView style={styles.page}>
            <View style={styles.header}>
                <View style={styles.headerLeftContainer}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <MaterialIcons name="keyboard-arrow-left" color="#FFF" size={32} />
                    </Pressable>
                    <Text style={styles.title}>Nova publicação</Text>
                </View>

                {/* <ButtonComponent 
                    textStyle={(content && !uploading) ? styles.publishButtonText : styles.publishButtonTextDisabled} 
                    style={(content && !uploading) ? styles.publishButton : styles.publishButtonDisabled}
                    onPress={publish} 
                    text='publicar'/> */}
                <Pressable onPress={publish} style={(content && !uploading) ? styles.publishButton : styles.publishButtonDisabled}>
                    <Text style={(content && !uploading) ? styles.publishButtonText : styles.publishButtonTextDisabled}>Publicar</Text>
                </Pressable>
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

                <PickerComponent style={styles.projectPicker} value={selectedProject} onChange={(id) => setSelectedProject(id)}>
                    <Picker.Item label="Selecionar um projeto" enabled={false} />
                    {
                        projects.map((p) => 
                            <Picker.Item key={p.id} value={p.id} label={p.name}/>
                        )
                    }
                </PickerComponent>
            </View>
        </KeyboardAvoidingView>
    )
}

export default PostRegisterPage
