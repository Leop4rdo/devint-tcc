import { useEffect } from "react"
import { View, Text, Animated } from "react-native"
import useAnimation from "../../../hooks/useAnimation"
import FeedbackTextInput from "../../utils/FeedbackInput"
import { IRegisterFormProps } from "./Step1"




const RegisterFormStep2 : React.FC<IRegisterFormProps> = ({styles, formData, onChange}) => {
    const opacityAnim = useAnimation(0, 1)

    useEffect(() => {
        opacityAnim.start();
    }, [opacityAnim.prop])

    return(
        <Animated.View style={{...styles.form, opacity : opacityAnim.prop}}>
            <FeedbackTextInput 
                style={styles.input} 
                placeholder="" 
                icon="calendar-today" 
                onChangeText={(text : string) => onChange(text, 'birthday') } ></FeedbackTextInput>
        </Animated.View>
    )
}

export default RegisterFormStep2