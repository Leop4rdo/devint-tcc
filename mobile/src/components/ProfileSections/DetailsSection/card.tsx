import { MaterialIcons } from "@expo/vector-icons"
import { Pressable, Text, View } from "react-native"
import colors from "../../../styles/colors"
import styles from "./style"

interface IDetailCardProps extends React.PropsWithChildren {
    headerIcon : keyof typeof MaterialIcons.glyphMap
    title : string
    onEditPress ?: () => void
    editing ?: boolean
}

const DetailCard : React.FC<IDetailCardProps> = (props) => {


    return (
        <View style={styles.dataContainer}>
            <View style={styles.header}>
                <View style={styles.infoItem}>
                    <MaterialIcons name={props.headerIcon} size={24} color='#FFF' />
                    <Text style={styles.title}>{props.title}</Text>
                </View>

                {
                    props.onEditPress &&
                    <Pressable onPress={props.onEditPress}>
                        <MaterialIcons name={(!props.editing) ? "edit" : "check"} size={16} color={colors.LIGHT_GRAY} />
                    </Pressable>
                }
            </View>
            
            <View>

            </View>
            { props.children }
        </View>
    )
}

export default DetailCard
