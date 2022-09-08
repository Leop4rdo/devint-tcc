import { View, Text } from "react-native"
import FeedbackTextInput from "../../utils/FeedbackInput"
import { IRegisterFormProps } from "./Step1"




const RegisterFormStep2 : React.FC<IRegisterFormProps> = ({styles, formData, onChange}) => {
    return(
        <View style={styles.form}>
            <FeedbackTextInput 
                style={styles.input} 
                placeholder="" 
                icon="calendar-today" 
                onChangeText={(text : string) => onChange(text, 'birthday') } ></FeedbackTextInput>
        </View>
    )
}

export default RegisterFormStep2