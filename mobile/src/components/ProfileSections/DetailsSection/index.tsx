import { MaterialIcons } from "@expo/vector-icons"
import { Pressable, Text, View } from "react-native"
import colors from "../../../styles/colors"
import ProfileDetailItem from "../../ProfileDetailItem"
import styles from "./style"

const DetailsSection : React.FC = () => {
    return (
        <>
            <View style={styles.dataContainer}>
                <View style={styles.header}>
                    <View style={{flexDirection : 'row'}}>
                        <MaterialIcons name="forum" size={24} color='#FFF' />
                        <Text style={styles.title}>Contato</Text>
                    </View>

                    <Pressable>
                        <MaterialIcons name="edit" size={16} color={colors.LIGHT_GRAY} />
                    </Pressable>
                </View>

                
            </View>
        </>
    )
}

export default DetailsSection;
