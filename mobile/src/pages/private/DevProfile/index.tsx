import {Text, View,Image, Pressable, Alert} from "react-native"
import {MaterialIcons} from "@expo/vector-icons";
import LayoutWrapper from "../../../components/shared/LayoutWrapper";
import styles from "./style";
import Post from "../../../components/Post";
import ProfileEdit from "../../../components/ProfileDetailItem";
import ButtonComponent from "../../../components/shared/Button";
import { GestureDetector, ScrollView, Swipeable, TextInput } from "react-native-gesture-handler";
import { useContext, useEffect, useState } from "react";
import DetailsSection from "../../../components/ProfileSections/DetailsSection";
import colors from "../../../styles/colors";
import IDevMinimal, { IDev } from "../../../interfaces/IDev";

import firebase from "../../../config/firebase";
import * as ImagePicker from 'expo-image-picker'

import * as devService from "../../../services/dev.service";
import { AuthContext } from "../../../store/context/Auth.context";
import ProfilePostSection from "../../../components/ProfileSections/Posts";
import { useIsFocused } from "@react-navigation/native";
import ProfileProjectsSection from "../../../components/ProfileSections/Projects";

const ProfilePage: React.FC<{ route : any, navigation : any }> = ({route, navigation}) => {
    const [currentSection, setCurrentSection] = useState(0);
    const [data, setData] = useState<IDev>();
    const [uploading, setUploading] = useState(false);
    const [following, setFollowing] = useState(false);
    const [editing, setEditing] = useState(false);
    
    const authContext = useContext(AuthContext);
    const isFocused = useIsFocused();

    const getDev = async () => {
        const res = await devService.findById(route.params.devId)

        setData({
            ...res.data,
            birthday : res.data.birthday.split('-').reverse().join('/')
        })
    }

    const updateDev = async (body : IDev) => {
        const _body : IDev =  {
            ...body,
            birthday : body.birthday.split('/').reverse().join('-')
        }

        const res = await devService.update(_body as any, body.id!)

        setData({
            ...res.data,
            birthday : res.data.birthday.split('-').reverse().join('/')
        })
    }

    const pickImage = async (type : 'profile' | 'banner') => {
        if (uploading)
            return;
        
        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing : true,
            mediaTypes : ImagePicker.MediaTypeOptions.Images,
            quality : 1,
            aspect : (type === 'banner') ? [ 360, 90 ] : [ 1, 1 ]
        })

        if (result.cancelled)
            return
        
        uploadImage(result.uri, type)
    }

    const uploadImage = async (uri : string, folder : 'banner' | 'profile') => {
        setUploading(true)

        try {
            const res = await fetch(uri)
            const blob = await res.blob()
            const fileName = `${folder}-${data!.id!}`

            const uploaded = await firebase.storage().ref().child(`${folder}/`).child(fileName).put(blob)

            const donwloadURL = await uploaded.ref.getDownloadURL()

            const updatedData = {
                ...data!,
                profilePicUrl : (folder == 'profile') ? donwloadURL : data?.profilePicUrl!,
                bannerURI : (folder == 'banner') ? donwloadURL : data?.bannerURI!
            }

            setData(updatedData)

            updateDev(updatedData)

        } catch (err) {
            console.log(err)
            Alert.alert('Houve um erro inesperado ao fazer upload!')
        } finally {
            setUploading(false)
        }
    }

    const toggleFollow = async () => {
        if (!data) 
            return

        const res = await devService.toggleFollow(data.id!)

        setFollowing(!following);
    }

    const toggleEditing = () => {
        Alert.alert((editing) ? 'true' : 'false')

        if (editing)
            updateDev(data!)

        setEditing(!editing)
    }

    useEffect(() => { getDev() }, [])

    return(
        <LayoutWrapper navigation={navigation} focused={isFocused}>
            <ScrollView>
                <View style={styles.page}>

                    <View style={styles.header}>
                        <View style={{ position : 'relative' }}>
                            <Image source={{uri:data?.bannerURI}}style={styles.banner}></Image>
                            {
                                authContext?.userData.id == data?.id &&
                                <Pressable style={[styles.editFloatBtn, {right : 8, top : 8}  ]} onPress={() => pickImage("banner")}>
                                    <MaterialIcons name="wallpaper" size={16} color='#FFF' />
                                </Pressable>
                            }
                        </View>

                        <View style={{flexDirection : 'row', justifyContent : 'space-between', alignItems : 'flex-end', paddingHorizontal : 16, marginTop : -48}}>
                            
                            <View style={{position : 'relative'}}>
                                <Image source={{uri: data?.profilePicUrl}} style={styles.photoUser}></Image>

                                {
                                    authContext?.userData.id == data?.id &&
                                    <Pressable style={[styles.editFloatBtn, {right : -4, bottom : 8} ]} onPress={() => pickImage("profile")}>
                                        <MaterialIcons name="add-a-photo" size={16} color='#FFF' />
                                    </Pressable>
                                }
                            </View>
                            {
                                authContext?.userData.id != data?.id &&
                                <Pressable style={styles.followButton} onPress={toggleFollow}>
                                    <Text style={styles.followButtonText}>{ following ? 'Seguindo' : '+ Seguir'}</Text>
                                </Pressable>
                            }
                        </View>

                        <View style={{paddingHorizontal : 16, position : 'relative'}}>
                            

                            <View style={{justifyContent : 'space-between', alignItems : 'center', flexDirection : 'row'}}>
                                <Text style={styles.devName}>{data?.name}</Text>
                            
                                {
                                    authContext?.userData.id == data?.id &&    
                                    <Pressable style={{padding : 8}} onPress={toggleEditing}>
                                        <MaterialIcons name={(editing) ? 'check': "edit"} size={16} color={colors.LIGHT_GRAY} />
                                    </Pressable>
                                } 
                            </View>
                            {
                                (editing) ?
                                    <TextInput 
                                        style={styles.bioInput} 
                                        multiline
                                        maxLength={255} 
                                        value={data?.bio}  
                                        onChangeText={(text) => 
                                            setData({
                                                ...data!, 
                                                bio : text
                                            })
                                        } 
                                    />
                                :
                                    <>{data?.bio && <Text style={styles.devBio}>{data.bio}</Text> }</>
                            }
                        </View>
                    </View>
                    
                    <View style={styles.followDataContainer}>
                        <View style={styles.followData}>
                            <Text style={styles.amount}>{(data) ? (following) ? data.following.length + 1 : data.followers.length : '--'}</Text>
                            <Text style={styles.text}>Seguidores</Text>
                        </View>
                        <View style={styles.followData}>
                            <Text style={styles.amount}>{(data) ? data.following.length : '--'}</Text>
                            <Text style={styles.text}> Seguindo</Text>
                        </View>
                    </View>
                    

                    <View style={styles.nav}>
                        <Pressable style={currentSection === 0 ? styles.navItem : {}} onPress={() => setCurrentSection(0)}>
                            <Text style={[styles.selectedNavItem, { color : currentSection === 0 ? colors.PRIMARY : colors.LIGHT_GRAY}]}>Posts</Text>
                        </Pressable>

                        <Pressable style={currentSection === 1 ? styles.navItem : {}} onPress={() => setCurrentSection(1)}>
                            <Text style={[styles.selectedNavItem, { color : currentSection === 1 ? colors.PRIMARY : colors.LIGHT_GRAY}]}>Artigos</Text>
                        </Pressable>

                        <Pressable style={currentSection === 2 ? styles.navItem : {}} onPress={() => setCurrentSection(2)}>
                            <Text style={[styles.selectedNavItem, { color : currentSection === 2 ? colors.PRIMARY : colors.LIGHT_GRAY}]}>Projetos</Text>
                        </Pressable>
                        <Pressable style={currentSection === 3 ? styles.navItem : {}} onPress={() => setCurrentSection(3)}>
                            <Text style={[styles.selectedNavItem, { color : currentSection === 3 ? colors.PRIMARY : colors.LIGHT_GRAY}]}>Informações</Text>
                        </Pressable>
                    </View>

                    <View style={styles.section}>
                        {
                            (currentSection === 3) ? 
                                <DetailsSection canEdit={authContext?.userData.id == data?.id} data={data as IDev} onFinishEditing={updateDev}/>
                            : (currentSection === 2) ?
                                <ProfileProjectsSection navigation={navigation}/>
                            : (currentSection === 1) ?
                            <Text>1</Text>
                            : (currentSection === 0 ) ? 
                                <ProfilePostSection navigation={navigation} devId={data?.id!} />
                            :   <Text>Pagina inválida</Text>
                        }
                    </View>
                </View>
            </ScrollView>
        </LayoutWrapper>
    )

}

export default ProfilePage