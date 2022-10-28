import {View, Image, Pressable} from "react-native"
import {MaterialIcons} from "@expo/vector-icons";
import styles from "./style";
const EditPage: React.FC<{ navigation : any }> = ({navigation}) => {

    return(
            <View style={styles.page}>
                <View >
                    <Image source={{uri:'https://arquivei.com.br/blog/wp-content/uploads/2017/09/tipos-empresas-1200_og.jpg'}}style={styles.backgroundImage}></Image>
                        <Pressable>
                            <MaterialIcons name="add"  color='#FFF' style={styles.banner}></MaterialIcons>
                        </Pressable>
                    <View style={styles.profileEdit}>
                        <Image source={{uri:'https://midias.correiobraziliense.com.br/_midias/jpg/2013/11/15/675x450/1_cbifot151120135622-18891928.jpg?20220922092144?20220922092144'}} style={styles.photoUser}></Image>
                        <Pressable>
                            <MaterialIcons  name="photo-camera"  color='#FFF' style={styles.perfil}></MaterialIcons>
                        </Pressable>
                    </View>
                </View>
                

           
            </View>
    )
}
export default EditPage