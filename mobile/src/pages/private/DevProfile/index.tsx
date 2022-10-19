import {Text, View,Image, Button, Pressable} from "react-native"
import {MaterialIcons} from "@expo/vector-icons";
import LayoutWrapper from "../../../components/shared/LayoutWrapper";
import styles from "./style";
import ButtonComponent from "../../../components/shared/Button";
import Post from "../../../components/Post";



const ProfilePage: React.FC<{ navigation : any }> = ({navigation}) => {
    return(
        <LayoutWrapper navigation={navigation}>
            <View style={styles.page}>
                <View style={styles.profileContainer}>
                    <Image source={{uri:'https://arquivei.com.br/blog/wp-content/uploads/2017/09/tipos-empresas-1200_og.jpg'}}style={styles.backgroundImage}></Image>
                    <View style={styles.profileEdit}>
                        <Image source={{uri:'https://midias.correiobraziliense.com.br/_midias/jpg/2013/11/15/675x450/1_cbifot151120135622-18891928.jpg?20220922092144?20220922092144'}} style={styles.photoUser}></Image>
                        <Pressable style={styles.buttonEdit}>
                            <MaterialIcons name="edit" size={16} color='#FFF' />
                            <Text style={styles.textButton}>Editar perfil</Text>
                        </Pressable>
                    </View>
                    <View style={styles.diceProfile}>
                        <Text style={styles.devName}>Daiane Silva</Text>
                        <Text style={styles.devName}>bio skdjkajdlkjsakdj</Text>
                    </View>
                </View>
   
            </View>
        </LayoutWrapper>
    )

}

export default ProfilePage