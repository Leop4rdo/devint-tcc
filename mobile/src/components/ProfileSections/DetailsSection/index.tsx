import { MaterialIcons } from "@expo/vector-icons"
import { Text, View } from "react-native"
import colors from "../../../styles/colors"
import ProfileDetailItem from "../../ProfileDetailItem"
import styles from "./style"

const DetailsSection : React.FC = () => {
    return <>
        <ProfileDetailItem icon="forum" text="Contato">
            <View style={styles.containerChildren}>
                <MaterialIcons style={styles.icon} name="mail" color={colors.LIGHT_GRAY}></MaterialIcons>
                <Text style={styles.textedit}>john.doe@devint.com</Text>
            </View>
        </ProfileDetailItem>

        <ProfileDetailItem icon="group" text="Sobre">
            <View style={styles.containerChildren}>
                <MaterialIcons style={styles.icon} name="event" color={colors.LIGHT_GRAY}></MaterialIcons>
                <Text style={styles.textedit}>29/08/2099</Text>
            </View>

            <View style={styles.containerChildren}>
                <MaterialIcons style={styles.icon} name="group" color={colors.LIGHT_GRAY}></MaterialIcons>
                <Text style={styles.textedit}>Masculino</Text>
            </View>
        </ProfileDetailItem>

        <ProfileDetailItem icon="center-focus-strong" text="Foco de Carreira">
            <View style={styles.containerChildren}>
                <Text style={styles.textedit}>Front-End</Text>
            </View>
        </ProfileDetailItem>

        <ProfileDetailItem icon="work" text="Trabalho atual">
            <View style={styles.containerChildren}>
                <Text style={styles.textedit}>Front-End</Text>
            </View>
        </ProfileDetailItem>

        <ProfileDetailItem icon="school" text="Senioridade">
            <View style={styles.containerChildren}>
                <Text style={styles.textedit}>Junior</Text>
            </View>
        </ProfileDetailItem>

        <ProfileDetailItem icon="star" text="Habilidades">
            <View style={styles.containerChildren}>
                <Text style={styles.textedit}>Junior</Text>
            </View>
        </ProfileDetailItem>
   </>
}

export default DetailsSection;
