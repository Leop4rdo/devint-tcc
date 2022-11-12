import { MaterialIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { Image, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import colors from "../../../styles/colors";
import PickerComponent from "../../shared/Picker";
import styles from "./style";

type inputOptions = {
    value : string,
    label : string,
}

interface IInfoItemProps {
    value : string
    editing ?: boolean
    icon ?: keyof typeof MaterialIcons.glyphMap
    imageUri ?: any
    onChangeText ?: (text : string) => void
    options ?: inputOptions[]
}

const InfoItem : React.FC<IInfoItemProps> = (props) => {
    const renderInput = () => {
        if (props.options)
            return (
                <PickerComponent value={props.value}onChange={props.onChangeText} style={{...styles.input, marginHorizontal : 0}}>
                    {props.options.map((opt) => 
                        <Picker.Item {...opt} key={opt.value}/>
                    )}
                </PickerComponent>
            )
                

        return <TextInput value={props.value} style={styles.input} onChangeText={props.onChangeText}/>
    }

    return (
        <View style={styles.infoItem}>
            { props.icon && <MaterialIcons name={props.icon} size={16} color={colors.LIGHT_GRAY} style={{marginRight : 8}} /> }
            { props.imageUri && <Image source={props.imageUri} style={{width : 16, height : 16, marginRight : 8}}/> }

            {
                props.editing ?
                    renderInput()
                :
                    <Text style={styles.infoItemText}>{props.value}</Text>
            }
        </View>
    )
}

export default InfoItem;