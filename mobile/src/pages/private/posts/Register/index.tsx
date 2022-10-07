import {MaterialIcons} from "@expo/vector-icons"
import {Pressable, Text, View} from "react-native"
import ButtonComponent from "../../../../components/shared/Button"
import styles from "./style"


const PostRegisterPage : React.FC<{ navigation : any }> = ({navigation}) => {
    
    return (
        <View style={styles.page}>
            <View style={styles.header}>
                <View style={styles.headerLeftContainer}>
                    <Pressable>
                        <MaterialIcons name="keyboard-arrow-left" color="#FFF" size={32} />
                    </Pressable>
                    <Text style={styles.title}>Nova publicação</Text>
                </View>

                <ButtonComponent textStyle={styles.publishButtonText} onPress={() => {}} style={styles.publishButton} text='publicar'/>
            </View> 
        </View>
    )
}

export default PostRegisterPage
