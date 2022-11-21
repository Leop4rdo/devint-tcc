import { NavigationProp } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";

import styles from './style'

const ProfileProjectsSection : React.FC<{ navigation : any }> = ({ navigation }) => {

    return (
        <>
            <View style={{ flexDirection : 'column', alignItems : 'center'}}>
                <Pressable onPress={() => navigation.navigate('project-register')} style={styles.button}>
                    <Text style={styles.buttonText}>Novo Projeto</Text>
                </Pressable>
            </View>
        </>
    )

}

export default ProfileProjectsSection