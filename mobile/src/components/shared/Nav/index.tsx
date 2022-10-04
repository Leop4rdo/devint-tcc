import { MaterialIcons } from "@expo/vector-icons"
import { Pressable, StyleSheet, View } from "react-native"
import Logo from "../Logo"
import styles from "./styles"

interface INavBarProps {
    toggleSidebar : () => void
}

const NavBar : React.FC<INavBarProps> = ({toggleSidebar}) => {

    return (
        <View style={styles.navBar}>
            <Pressable style={styles.menuItem} onPress={ toggleSidebar }>
                <MaterialIcons name="menu" size={24} color="#FFF" />
            </Pressable>

            <Logo />

            <View style={{flexDirection : 'row'}}>
                <Pressable style={styles.menuItem}>
                    <MaterialIcons name="search" size={24} color="#FFF" />
                </Pressable>

                <Pressable style={styles.menuItem}>
                    <MaterialIcons name="notifications" size={24} color="#FFF" />
                </Pressable>
            </View>
        </View>
    )
}

export default NavBar