import { View, Text, TextInput } from "react-native"
import FeedbackTextInput from "../../utils/FeedbackInput"


interface IRegisterFormProps {
    styles : any
}

const RegisterFormStep3 : React.FC<IRegisterFormProps> = ({styles}) => {
    return(
        <View style={styles.form}>
            <FeedbackTextInput isPassword style={styles.input} placeholder="" icon="lock" onChangeText={(text : string) => {}} ></FeedbackTextInput>
            <FeedbackTextInput isPassword style={styles.input} placeholder="" icon="lock" onChangeText={(text : string) => {}} ></FeedbackTextInput>
        </View>
    )
}

export default RegisterFormStep3