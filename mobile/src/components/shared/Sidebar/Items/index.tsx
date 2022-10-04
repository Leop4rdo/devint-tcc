import { MaterialIcons } from "@expo/vector-icons"
import { Pressable, Text, View } from "react-native"
import { color } from "react-native-reanimated"
import colors from "../../../../styles/colors"
import styles from "./style"

interface ISidebarItemProps {
    icon : keyof typeof MaterialIcons.glyphMap
    name : string
    onPress ?: () => void
    active ?: boolean
}

const SidebarItem : React.FC<ISidebarItemProps> = ({ icon, name, onPress, active}) => {

    return (
        <Pressable style={{...styles.sidebarItem, backgroundColor : (active) ? colors.PRIMARY : colors.BLACK}}>
            <MaterialIcons name={icon} size={32} color="#FFF" />
            <Text style={styles.label} >{name}</Text>
        </Pressable>
    )
}

export default SidebarItem