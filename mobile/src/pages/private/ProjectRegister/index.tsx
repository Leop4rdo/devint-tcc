import { MaterialIcons } from "@expo/vector-icons"
import { KeyboardAvoidingView, Pressable, Text, View } from "react-native"
import ButtonComponent from "../../../components/shared/Button"

import styles from './style'

const ProjectRegisterPage : React.FC<{ route : any, navigation : any }> = ({route, navigation}) => {
    return (
        <KeyboardAvoidingView style={styles.page}>
            <View style={styles.header}>
                <View style={styles.headerLeftContainer}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <MaterialIcons name="keyboard-arrow-left" color="#FFF" size={32} />
                    </Pressable>
                    <Text style={styles.title}>Novo projeto</Text>
                </View>
            </View>

        </KeyboardAvoidingView>
    )
}

export default ProjectRegisterPage