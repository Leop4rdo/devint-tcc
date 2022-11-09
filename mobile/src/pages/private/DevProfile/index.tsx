import {Text, View,Image, Pressable} from "react-native"
import {MaterialIcons} from "@expo/vector-icons";
import LayoutWrapper from "../../../components/shared/LayoutWrapper";
import styles from "./style";
import Post from "../../../components/Post";
import ProfileEdit from "../../../components/ProfileDetailItem";
import ButtonComponent from "../../../components/shared/Button";
import { GestureDetector, ScrollView, Swipeable } from "react-native-gesture-handler";
import { useContext, useEffect, useState } from "react";
import DetailsSection from "../../../components/ProfileSections/DetailsSection";
import colors from "../../../styles/colors";
import { useParams } from "react-router-native";
import IDevMinimal, { IDev } from "../../../interfaces/IDev";

import * as devService from "../../../services/dev.service"
import { AuthContext } from "../../../store/context/Auth.context";


const ProfilePage: React.FC<{ route : any, navigation : any }> = ({route, navigation}) => {
    const [currentSection, setCurrentSection] = useState(0)
    const [data, setData] = useState<IDev>()
    const authContext = useContext(AuthContext)


    const getDev = async () => {
        const res = await devService.findById(route.params.devId)

        setData(res.data)
    }

    useEffect(() => { getDev() }, [])

    const [dev, setDev] = useState<IDev | null>(null)
    const { devId } = useParams()
    const [select, setSelectSkill] = useState()
    const [following, setFollowing] = useState(false);


    const findById = async () => {
        if (!devId) return
        const res = await devService.findById(devId)

        setDev(res.data)
        setFollowing(res.data?.followers.find((d: IDevMinimal) => d.id === authContext?.userData.id) != undefined)
    }

    const toggleFollow = async () => {
        if (!devId) return
        const res = await devService.toggleFollow(devId)
        setFollowing(!following);
        const updateFollowing = await devService.findById(devId)
        setDev(updateFollowing.data)
    }

    
    useEffect(() => { findById() }, [devId])

    const getDevs = async () => {
        const res = await devService.list({ limit: 24 })

        setSelectSkill(res.data)
    }

    return(
        <LayoutWrapper navigation={navigation}>
            <ScrollView>
                <View style={styles.page}>

                    <Image source={{uri:data?.bannerURI}}style={styles.backgroundImage}></Image>
                    <View style={styles.header}>
                        <View style={{flexDirection : 'row', justifyContent : 'space-between', alignItems : 'flex-end'}}>
                            <Image source={{uri: data?.profilePicUrl}} style={styles.photoUser}></Image>
                            

                        {
                            (authContext?.userData?.id !== devId) ?
                                <Pressable style={styles.followButton} onPress={toggleFollow}>
                                    <Text style={styles.followButtonText}>{ following ? '+ Seguir' : '- Seguindo '}</Text>
                                </Pressable> : ""
                        
                        }
                        </View>

                        <View>
                            <Text style={styles.devName}>{data?.name}</Text>
                            <Text style={styles.devBio}>aosdalsldkajsdlakjjsldkaljsd alskdjalksj alskdjalskjda alkajsdl </Text>
                        </View>
                    </View>
                    
                    <View style={styles.followDataContainer}>
                        <View style={styles.followData}>
                            <Text style={styles.amount}>40</Text>
                            <Text style={styles.text}>Seguidores</Text>
                        </View>
                        <View style={styles.followData}>
                            <Text style={styles.amount}>40</Text>
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
                            <DetailsSection />
                            : (currentSection === 2) ?
                            <Text>2</Text>
                            : (currentSection === 1) ?
                            <Text>1</Text>
                            : (currentSection === 0 ) ? 
                            <Text>0</Text>
                            :   <Text>Pagina inválida</Text>
                        }
                    </View>
                </View>
            </ScrollView>
        </LayoutWrapper>
    )

}

export default ProfilePage