import { useEffect } from "react"
import { View, Text, TextInput, Animated } from "react-native"
import useAnimation from "../../../hooks/useAnimation"
import FeedbackTextInput from "../../shared/FeedbackInput"
import { IRegisterFormProps } from "./Step1"



const RegisterFormStep3 : React.FC<IRegisterFormProps> = ({styles, onChange, formData}) => {
    const opacityAnim = useAnimation(0, 1)

    useEffect(() => {
        opacityAnim.start();
    }, [opacityAnim.prop])

    return(
        <Animated.View style={styles.form}>
            <FeedbackTextInput isPassword style={styles.input} placeholder="" icon="lock" onChangeText={(text : string) => onChange(text, "password")} ></FeedbackTextInput>
            <FeedbackTextInput isPassword style={styles.input} placeholder="" icon="lock" onChangeText={(text : string) => onChange(text, "confirmPassword")} ></FeedbackTextInput>
        </Animated.View>
    )
}

export default RegisterFormStep3