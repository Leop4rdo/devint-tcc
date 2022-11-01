import { MaterialIcons } from "@expo/vector-icons"
import { Text, View } from "react-native"
import ProfileEdit from "../../ProfileEdit"
import styles from "./style"

const DetailsSection : React.FC = () => {
    return <>
        <ProfileEdit icon="forum" text="Contato">
        <View style={styles.containerChildren}>
        <MaterialIcons style={styles.icon} name="mail" color={'#FFF'}></MaterialIcons>
        <Text style={styles.textedit}>john.doe@devint.com</Text>
        </View>
        <View style={styles.containerChildren}>
        <MaterialIcons style={styles.icon} name="call" color={'#FFF'}></MaterialIcons>
        <Text style={styles.textedit}>(XX) XXXXX-XXXX</Text>
        </View>
        </ProfileEdit>

    <ProfileEdit icon="group" text="Sobre">
        <View style={styles.containerChildren}>
        <MaterialIcons style={styles.icon} name="event" color={'#FFF'}></MaterialIcons>
        <Text style={styles.textedit}>29/08/2099</Text>
        </View>

        <View style={styles.containerChildren}>
        <MaterialIcons style={styles.icon} name="group" color={'#FFF'}></MaterialIcons>
        <Text style={styles.textedit}>Masculino</Text>
        </View>
    </ProfileEdit>

    <ProfileEdit icon="star" text="Foco de Carreira">
        <View style={styles.containerChildren}>
        <MaterialIcons style={styles.icon} name="center-focus-weak" color={'#FFF'}></MaterialIcons>
        <Text style={styles.textedit}>Front-End</Text>
        </View>
    </ProfileEdit>

    <ProfileEdit icon="work" text="Trabalho atual">
        <View style={styles.containerChildren}>
        <Text style={styles.textedit}>Front-End</Text>
        </View>
    </ProfileEdit>

    <ProfileEdit icon="school" text="Senioridade">
        <View style={styles.containerChildren}>
        <Text style={styles.textedit}>Junior</Text>
        </View>
    </ProfileEdit>

    <ProfileEdit icon="star" text="Habilidades">
        <View style={styles.containerChildren}>
        <Text style={styles.textedit}>Junior</Text>
        </View>
    </ProfileEdit>
   </>
}

export default DetailsSection;
