import {Text, View,Image, Pressable} from "react-native"
import {MaterialIcons} from "@expo/vector-icons";
import LayoutWrapper from "../../../components/shared/LayoutWrapper";
import styles from "./style";
import Post from "../../../components/Post";
import ProfileEdit from "../../../components/ProfileDetailItem";
import ButtonComponent from "../../../components/shared/Button";
import { GestureDetector, ScrollView, Swipeable } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import DetailsSection from "../../../components/ProfileSections/DetailsSection";
import colors from "../../../styles/colors";
import { IDev } from "../../../interfaces/IDev";

import * as devService from "../../../services/dev.service"

const ProfilePage: React.FC<{ route : any, navigation : any }> = ({route, navigation}) => {
    const [currentSection, setCurrentSection] = useState(0)
    const [data, setData] = useState<IDev>()

    const getDev = async () => {
        const res = await devService.findById(route.params.devId)

        setData(res.data)
    }

    useEffect(() => { getDev() }, [])

    return(
        <LayoutWrapper navigation={navigation}>
            <ScrollView>
                <View style={styles.page}>

                    <View style={styles.header}>
                        <Image source={{uri:data?.bannerURI}}style={styles.banner}></Image>
                        <View style={{flexDirection : 'row', justifyContent : 'space-between', alignItems : 'flex-end', paddingHorizontal : 16, marginTop : -48}}>
                            <Image source={{uri: data?.profilePicUrl}} style={styles.photoUser}></Image>
                            
                            <Pressable style={styles.followButton}>
                                <Text style={styles.followButtonText}>+ Seguir</Text>
                            </Pressable>
                        </View>

                        <View style={{paddingHorizontal : 16}}>
                            <Text style={styles.devName}>{data?.name}</Text>
                            { data?.bio && <Text style={styles.devBio}>{data.bio}</Text> }
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
                            <DetailsSection data={data as IDev}/>
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