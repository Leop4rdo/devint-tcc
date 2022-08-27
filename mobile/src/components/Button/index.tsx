import { Pressable, Text, View } from "react-native";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Children, useState } from "react";
import buttonStyles from "./style";
import colors from "../../styles/colors";

interface IButtonProps {
    onPress : () => void,
    style? : any
    pressedStyle? : any
    textStyle? : object | object[]
    icon? : keyof typeof MaterialIcons.glyphMap 
    iconSize? : number,
    iconColor? : string
    text? : string,
}

const ButtonComponent : React.FC<IButtonProps> = ({onPress, style, text, textStyle, icon, iconSize, iconColor, pressedStyle}) => {
    const [isPressed, setPressed] = useState(false)


    const getIconColor = () => (iconColor) ? iconColor : colors.PRIMARY

    return (
        <Pressable 
            onPress={onPress} 
            onPressIn={() => setPressed(true)}
            onPressOut={() => setPressed(false)}
            style={[
                style || buttonStyles.base, 
                (isPressed) ? pressedStyle : buttonStyles.basePressed
            ]}
            >
            { icon && <Ionicons name={icon} size={ iconSize || 24} color={getIconColor()} style={(text) ? {marginRight : 8} : {}}/>}  
            <Text style={[ buttonStyles.text, textStyle ]}>{text}</Text>
        </Pressable>
    )
}

export default ButtonComponent;