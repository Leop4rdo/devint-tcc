import { MaterialIcons } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import colors from "../../../styles/colors";
import styles from "./style";

interface IInfoItemProps {
    value : string
    editing ?: boolean
    icon ?: keyof typeof MaterialIcons.glyphMap
    imageUri ?: any
}

const InfoItem : React.FC<IInfoItemProps> = (props) => {
    return (
        <View style={styles.infoItem}>
            { props.icon && <MaterialIcons name={props.icon} size={16} color={colors.LIGHT_GRAY} /> }
            { props.imageUri && <Image source={props.imageUri} style={{width : 16, height : 16}}/> }

            {
                props.editing ?
                    <TextInput value={props.value} />
                :
                    <Text style={styles.infoItemText}>{props.value}</Text>
            }
        </View>
    )
}

export default InfoItem;