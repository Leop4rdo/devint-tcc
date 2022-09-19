import { useEffect } from "react"
import { View, Text, Animated } from "react-native"
import useAnimation from "../../../hooks/useAnimation"
import FeedbackTextInput from "../../shared/FeedbackInput"
import { IRegisterFormProps } from "./Step1"




const RegisterFormStep2 : React.FC<IRegisterFormProps> = ({styles, formData, onChange}) => {
    const opacityAnim = useAnimation(0, 1)

    useEffect(() => {
        opacityAnim.start();
    }, [opacityAnim.prop])

    return(
        <Animated.View style={{...styles.form, opacity : opacityAnim.prop}}>
            {/* colorcar mascara para data no formato de dd/mm/aaaa */}
            <FeedbackTextInput 
                style={styles.input} 
                placeholder="" 
                value={formData.birthday}
                icon="calendar-today" 
                onChangeText={(text : string) => onChange(applyDateMask(text), 'birthday') } ></FeedbackTextInput>

            {/* colocar um input para o usuario no github */}
        </Animated.View>
    )
}

export default RegisterFormStep2