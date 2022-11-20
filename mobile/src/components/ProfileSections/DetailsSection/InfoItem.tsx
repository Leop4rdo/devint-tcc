import { MaterialIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { Image, Text, View, TextInput } from "react-native";
import colors from "../../../styles/colors";
import PickerComponent from "../../shared/Picker";
import styles from "./style";

type inputOptions = {
    value : string,
    label : string,
}

type keyboardTypes = "default" | 'numeric' | 'email-address' | "ascii-capable" | 'numbers-and-punctuation' | 
                    'url' | 'number-pad' | 'phone-pad' | 'name-phone-pad' | 'decimal-pad' | 'twitter' | 'web-search' | 
                    'visible-password'

interface IInfoItemProps {
    value : string
    editing ?: boolean
    icon ?: keyof typeof MaterialIcons.glyphMap
    imageUri ?: any
    onChangeText ?: (text : string) => void
    options ?: inputOptions[]
    keyboardType ?: keyboardTypes
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
                

        return <TextInput keyboardType={props.keyboardType || "default"} value={props.value} style={styles.input} onChangeText={props.onChangeText}/>
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
