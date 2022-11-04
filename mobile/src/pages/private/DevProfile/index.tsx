import {Text, View,Image, Pressable} from "react-native"
import {MaterialIcons} from "@expo/vector-icons";
import LayoutWrapper from "../../../components/shared/LayoutWrapper";
import styles from "./style";
import Post from "../../../components/Post";
import ProfileEdit from "../../../components/ProfileEdit";
import ButtonComponent from "../../../components/shared/Button";
import { GestureDetector, ScrollView, Swipeable } from "react-native-gesture-handler";
import { useState } from "react";
import DetailsSection from "../../../components/ProfileSections/DetailsSection";


const ProfilePage: React.FC<{ navigation : any }> = ({navigation}) => {
    const [currentSection, setCurrentSection] = useState(0)


    return(
        <LayoutWrapper navigation={navigation}>
            <ScrollView>
            <View style={styles.page}>

                <View style={styles.profileContainer}>
                    <Image source={{uri:'https://arquivei.com.br/blog/wp-content/uploads/2017/09/tipos-empresas-1200_og.jpg'}}style={styles.backgroundImage}></Image>

                    <View style={styles.profileEdit}>
                        <Image source={{uri:'https://midias.correiobraziliense.com.br/_midias/jpg/2013/11/15/675x450/1_cbifot151120135622-18891928.jpg?20220922092144?20220922092144'}} style={styles.photoUser}></Image>
                        <Pressable  style={styles.buttonEdit}>
                            <MaterialIcons name="add" size={16} color='#FFF' />
                            <Text style={styles.textButton}>Seguir </Text>
                        </Pressable>
                    </View>

                    <View style={styles.profileData}>
                        <Text style={styles.devName}>Daiane Silva</Text>
                        <Text style={styles.devBio}>bio skdjkajdlkjsakdj</Text>
                    </View>
                </View>
                
                <View style={styles.profileDice}>
                    <View style={styles.diceFollowers}>
                        <Text style={styles.amount}>40</Text>
                        <Text style={styles.text}>Seguidores</Text>
                    </View>
                    <View style={styles.dice}>
                        <Text style={styles.amount}>40</Text>
                        <Text style={styles.text}> Seguindo</Text>
                    </View>
                </View>
                

                <View style={styles.publicationData}>
                    <Pressable style={currentSection === 0 ? styles.publications : {}} onPress={() => setCurrentSection(0)}>
                        <Text style={styles.textPublications}>Posts</Text>
                    </Pressable>

                    <Pressable style={currentSection === 1 ? styles.publications : {}} onPress={() => setCurrentSection(1)}>
                        <Text style={styles.textPublications}>Artigos</Text>
                    </Pressable>

                    <Pressable style={currentSection === 2 ? styles.publications : {}} onPress={() => setCurrentSection(2)}>
                        <Text style={styles.textPublications}>Projetos</Text>
                    </Pressable>
                    <Pressable style={currentSection === 3 ? styles.publications : {}} onPress={() => setCurrentSection(3)}>
                        <Text style={styles.textPublications}>Informações</Text>
                    </Pressable>
                </View>

                <GestureDetector>
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
                </GestureDetector>
                
                
                    
               

   
            </View>
            </ScrollView>
        </LayoutWrapper>
    )

}

export default ProfilePage