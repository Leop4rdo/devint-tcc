import {useEffect, useRef} from "react"
import { View, Text, Animated } from "react-native"
import FeedbackTextInput from "../../utils/FeedbackInput"


export interface IRegisterFormProps {
    styles : any,
    formData : any
    onChange : (value : string, key : any) => void
}

const RegisterFormStep1 : React.FC<IRegisterFormProps> = ({styles, formData, onChange}) => {
    const fadeInAnimation = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(
            fadeInAnimation,
            {
                toValue: 1,
                useNativeDriver : true,
                duration: 750
            }
        ).start()
    }, [fadeInAnimation])

    return (
        <Animated.View style={{...styles.form, opacity : fadeInAnimation}}>
            <FeedbackTextInput style={styles.input} placeholder="Digite seu nome" icon="person" onChangeText={(text : string) => onChange(text, "name")} ></FeedbackTextInput>

            <FeedbackTextInput style={styles.input} placeholder="Digite um email" icon="mail" onChangeText={(text : string) => onChange(text, "email")} ></FeedbackTextInput>
        </Animated.View>
    )
}


export default RegisterFormStep1

