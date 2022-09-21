import { Picker } from '@react-native-picker/picker';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Children, useState } from "react";
import colors from '../../../styles/colors';

interface IPickerProps {
    icon?: keyof typeof MaterialIcons.glyphMap,
    iconSize?: number,
    iconColor?: string,
}

const PickerComponent: React.FC<IPickerProps> = (icon: string | undefined, iconSize: any, iconColor: any) => {

    const getIconColor = () => (iconColor) ? iconColor : colors.PRIMARY

    return (
        <View>
            <Picker >
                {icon && <MaterialIcons name={icon} size={iconSize || 24} color={getIconColor()} style={{ marginRight: 4 }} />}
                <Picker.Item label='' value='' />
            </Picker>
        </View>
    )

}

export default PickerComponent

