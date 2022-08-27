import { useState } from 'react';
import {View, TextInput} from 'react-native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import colors from '../../styles/colors';
import StyleBuilder from '../../styles/StyleBuilder';

import styles from "./style";

interface IFeedbackTextInput {
    width? : string | number
    placeholder? : string
    icon? : keyof typeof MaterialIcons.glyphMap 
    iconSize? : number
    onChangeText : (text : string) => void
    value?: string
    validate? : () => boolean
}

export const inputStatus = {
    NEUTRAL: 0,
    FOCUSED: 1,
    INVALID: 2
}

const FeedbackTextInput : React.FC<IFeedbackTextInput> = ({width, placeholder, icon, iconSize, onChangeText, value, validate}) => {
    const [status, setStatus] = useState(inputStatus.NEUTRAL);

    const containerStyles = new StyleBuilder()
        .addStyle(inputStatus.NEUTRAL, {...styles.container, width : width || 250}, true)
        .addStyle(inputStatus.FOCUSED, styles.focusedContainer)
        .addStyle(inputStatus.INVALID, styles.invalidContainer);

    const inputStyles = new StyleBuilder()
        .addStyle(inputStatus.NEUTRAL, styles.input, true)
        .addStyle(inputStatus.FOCUSED, styles.focusedInput)
        .addStyle(inputStatus.INVALID, styles.invalidInput);

    const onBlur = () => {
        if ( !validate || validate() ) {
            setStatus(inputStatus.NEUTRAL)
        } else {
            setStatus(inputStatus.INVALID)
        }
    }

    const getIconColor = () => {
        if (status === inputStatus.FOCUSED) 
            return colors.PRIMARY
        else if (status === inputStatus.INVALID)
            return colors.RED
        else 
            return colors.GRAY
    }

    return (
        <View style={containerStyles.process(status)}>
            { icon && <Ionicons name={icon} size={ iconSize || 24} color={getIconColor()} style={{marginRight : 8}}/>}
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                placeholderTextColor={colors.GRAY}
                onFocus={() => status != inputStatus.INVALID && setStatus(inputStatus.FOCUSED)}
                onBlur={onBlur}
            />
        </View>
    )
}

export default FeedbackTextInput

