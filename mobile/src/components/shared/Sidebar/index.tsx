import { Image, Pressable, Text, View } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import SidebarItem from "./Items"
import styles from "./styles"

const Sidebar : React.FC = () => {

    return (
        <View style={styles.sidebar}>
            <View style={{width : '80%'}}>
                <View>
                    <Image source={{ uri : 'https://avatars.githubusercontent.com/u/51890537?v=4'}} />
                    <Text>Usuário</Text>
                </View>
                <SidebarItem active icon="home" name="Home" />
                <SidebarItem icon="home" name="Home" />
                <SidebarItem icon="home" name="Home" />
                <SidebarItem icon="home" name="Home" />
                <SidebarItem icon="home" name="Home" />
                <SidebarItem icon="home" name="Home" />
            </View>

            <Pressable style={styles.exitContainer}>
                <Text style={styles.exitIcon}>:q</Text>
                <Text style={styles.exitText}>sair</Text>
            </Pressable>
        </View>
    )
}

export default Sidebar