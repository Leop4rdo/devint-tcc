
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { ReactNode } from 'react';
import { View , Text, Pressable} from 'react-native';
import containerStyles from "./style";

interface IProfileEditProps {
    children: ReactNode
    icon: keyof typeof MaterialIcons.glyphMap
    textStyle? : object | object[]
    iconSize? : number,
    iconColor? : string,
    text : string,
}

const ProfileEdit: React.FC<IProfileEditProps> = ({ children , icon , text, textStyle, iconColor, iconSize}) => {

    const getIconColor = () => (iconColor) ? iconColor : '#FFF'

    return (
        <View style={[containerStyles.base]}>
            <View style={[containerStyles.container]}>
                <View style={containerStyles.title}>
                    {icon && <MaterialIcons name={icon} size={iconSize || 20} color={getIconColor()} style={(text) ? { marginRight: 8 } : {}} />}
                    <Text style={[containerStyles.text, textStyle]}>{text}</Text>
                </View>
                <Pressable>
                        <MaterialIcons style={containerStyles.edit}name='edit' color={'#FFF'}></MaterialIcons>
                    </Pressable>
            </View>
            {children}
        </View>
    )
}

export default ProfileEdit;