import {useEffect, useRef} from "react"
import { View, Text, Animated } from "react-native"
import FeedbackTextInput from "../../utils/FeedbackInput"


interface IRegisterFormProps {
    styles : any
}

const RegisterFormStep1 : React.FC<IRegisterFormProps> = ({styles}) => {
    const fadeInAnimation = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(
            fadeInAnimation,
            {
                toValue: 1,
                useNativeDriver : true,
                duration: 250
            }
        ).start()
    }, [fadeInAnimation])

    return (
        <View style={styles.form}>
            <FeedbackTextInput style={styles.input} placeholder="Digite seu nome" icon="person" onChangeText={(text : string) => {}} ></FeedbackTextInput>

            <FeedbackTextInput style={styles.input} placeholder="Digite um email" icon="mail" onChangeText={(text : string) => {}} ></FeedbackTextInput>
        </View>
    )
}


export default RegisterFormStep1

