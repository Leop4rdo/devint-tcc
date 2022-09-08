import { View, Text, TextInput } from "react-native"
import FeedbackTextInput from "../../utils/FeedbackInput"
import { IRegisterFormProps } from "./Step1"



const RegisterFormStep3 : React.FC<IRegisterFormProps> = ({styles, onChange, formData}) => {
    return(
        <View style={styles.form}>
            <FeedbackTextInput isPassword style={styles.input} placeholder="" icon="lock" onChangeText={(text : string) => onChange(text, "password")} ></FeedbackTextInput>
            <FeedbackTextInput isPassword style={styles.input} placeholder="" icon="lock" onChangeText={(text : string) => {}} ></FeedbackTextInput>
        </View>
    )
}

export default RegisterFormStep3