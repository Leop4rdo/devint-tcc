import { useState } from 'react';
import {View, TextInput, Pressable, Touchable, Image} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../../../styles/colors';
import StyleBuilder from '../../../styles/StyleBuilder';
import styles from "./style";

interface IFeedbackTextInput {
    placeholder? : string
    isPassword? : boolean
    style? : any
    inputStyle? : any
    icon? : keyof typeof MaterialIcons.glyphMap
    iconSize? : number
    keyboardType ?: "default" | "numeric" | "email-address" | "user"
    onChangeText : (text : string) => void
    value?: string
    validate? : () => boolean
    maxLength? : number
    image? : any,
    autoFocus ?: boolean
    focusImage ?: string
    multiline ?: boolean
    maxLines ?: number,
    onFocus? : () => void
    onBlur? : () => void
}

export const inputStatus = {
    NEUTRAL: 0,
    FOCUSED: 1,
    INVALID: 2
}

const FeedbackTextInput : React.FC<IFeedbackTextInput> = ({style, inputStyle, onBlur, maxLines, autoFocus, isPassword, placeholder, icon, iconSize, onChangeText, value, validate, keyboardType, maxLength, image, focusImage, multiline, onFocus}) => {
    const [status, setStatus] = useState(inputStatus.NEUTRAL);
    const [textVisible, setTextVisible] = useState(false);

    const containerStyles = new StyleBuilder()
        .addStyle(inputStatus.NEUTRAL, {...styles.container, ...style}, true)
        .addStyle(inputStatus.FOCUSED, styles.focusedContainer)
        .addStyle(inputStatus.INVALID, styles.invalidContainer);

    const inputStyles = new StyleBuilder()
        .addStyle(inputStatus.NEUTRAL, styles.input, true)
        .addStyle(inputStatus.FOCUSED, styles.focusedInput)
        .addStyle(inputStatus.INVALID, styles.invalidInput);

    const _onBlur = () => {
        if ( !validate || validate() ) {
            setStatus(inputStatus.NEUTRAL)
        } else {
            setStatus(inputStatus.INVALID)
        }

        if (onBlur)
            onBlur()
    }

    const getIconColor = () => {
        if (status === inputStatus.FOCUSED) 
            return colors.PRIMARY
        else if (status === inputStatus.INVALID)
            return colors.RED
        else 
            return colors.GRAY
    }

    const toggleTextVisible = () => setTextVisible(!textVisible)

    
    return (
        <View style={containerStyles.process(status)}>
            {image && <Image style={styles.iconImage} source={(status === inputStatus.FOCUSED && focusImage) ? focusImage : image} />}
            { icon && <MaterialIcons name={icon} size={ iconSize || 24} color={getIconColor()} style={{marginRight : 4}}/>}
            <TextInput
                secureTextEntry={isPassword && !textVisible || false}
                style={[styles.input, inputStyle]}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                
                autoFocus={autoFocus}
                multiline={multiline}
                numberOfLines={maxLines || 1}
                keyboardType={keyboardType || "default"}
                placeholderTextColor={colors.GRAY}
                onFocus={() => { if (status != inputStatus.INVALID) {setStatus(inputStatus.FOCUSED) }  if (onFocus) {onFocus()}}}
                onBlur={_onBlur}
                maxLength={maxLength}

                
            />
            { isPassword &&
            
                <Pressable onPress={toggleTextVisible}>
                    <MaterialIcons 
                        name={textVisible ? 'visibility' : 'visibility-off'} 
                        size={ iconSize || 24} 
                        color={getIconColor()} 
                    />
                </Pressable>
            }
        </View>
    )
}

export default FeedbackTextInput

