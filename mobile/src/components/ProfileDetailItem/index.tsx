
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { ReactNode } from 'react';
import { View , Text, Pressable} from 'react-native';
import containerStyles from "./style";

interface IProfileDetailItemProps {
    children: ReactNode
    icon: keyof typeof MaterialIcons.glyphMap
    text : string,
}

const ProfileDetailItem: React.FC<IProfileDetailItemProps> = ({ children , icon , text,}) => {


    return (
        <View style={[containerStyles.base]}>
            <View style={[containerStyles.container]}>
                <View style={containerStyles.title}>
                    <MaterialIcons name={icon} size={24} color='#FFF' style={{ marginRight: 8 }} />
                    <Text style={containerStyles.text}>{text}</Text>
                </View>
                <Pressable>
                    <MaterialIcons style={containerStyles.edit}name='edit' color={'#FFF'}></MaterialIcons>
                </Pressable>
            </View>
            {children}
        </View>
    )
}

export default ProfileDetailItem;