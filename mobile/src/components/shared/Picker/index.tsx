import { Picker } from '@react-native-picker/picker';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Children, PropsWithChildren, useState } from "react";
import colors from '../../../styles/colors';
import styles from './style';

interface IPickerProps extends PropsWithChildren {
    icon?: keyof typeof MaterialIcons.glyphMap,
    iconSize?: number,
    iconColor?: string,
    value?: string,
    onChange?: (value: string) => void
}

const PickerComponent: React.FC<IPickerProps> = ({ icon, iconSize, iconColor, children, onChange, value }) => {

    const getIconColor = () => (iconColor) ? iconColor : colors.GRAY

    return (
        <View style={styles.container}>
            {icon && <MaterialIcons name={icon} size={iconSize || 24} color={getIconColor()} style={{ marginRight: 4 }} />}
            <Picker style={styles.picker} selectedValue={value} 
            dropdownIconColor={colors.GRAY}
            onValueChange={onChange}>
                {children}
            </Picker>
        </View>
    )
}
export default PickerComponent

