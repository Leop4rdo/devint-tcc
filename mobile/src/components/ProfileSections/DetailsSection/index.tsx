import { MaterialIcons } from "@expo/vector-icons"
import { Pressable, Text, View } from "react-native"
import colors from "../../../styles/colors"
import ProfileDetailItem from "../../ProfileDetailItem"
import styles from "./style"

const DetailsSection : React.FC = () => {
    return (
        <>
            {/* CONTATO */}
            <View style={styles.dataContainer}>
                <View style={styles.header}>
                    <View style={{flexDirection : 'row'}}>
                        <MaterialIcons name="forum" size={24} color='#FFF' />
                        <Text style={styles.title}>Contato</Text>
                    </View>
                </View>

                <View>
                    <View style={{flexDirection : 'row'}}>
                        <MaterialIcons name='email' size={16} color={colors.LIGHT_GRAY} />
                        <Text style={styles.infoIntem}>john.doe@mail.com</Text>
                    </View>
                </View>
            </View>
            
            {/* SOBRE */}
            <View style={styles.dataContainer}>
                <View style={styles.header}>
                    <View style={{flexDirection : 'row'}}>
                        <MaterialIcons name="round-info" size={24} color='#FFF' />
                        <Text style={styles.title}>Sobre</Text>
                    </View>

                    <Pressable>
                        <MaterialIcons name="edit" size={16} color={colors.LIGHT_GRAY} />
                    </Pressable>
                </View>

                <View>
                    <View style={{flexDirection : 'row'}}>
                        <MaterialIcons name='calendar' size={16} color={colors.LIGHT_GRAY} />
                        <Text style={styles.infoIntem}>john.doe@mail.com</Text>
                    </View>

                    <View style={{flexDirection : 'row'}}>
                        <MaterialIcons name='person' size={16} color={colors.LIGHT_GRAY} />
                        <Text style={styles.infoIntem}>john.doe@mail.com</Text>
                    </View>

                    <View style={{flexDirection : 'row'}}>
                        <MaterialIcons name='calendar' size={16} color={colors.LIGHT_GRAY} />
                        <Text style={styles.infoIntem}>john.doe@mail.com</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default DetailsSection;
