import { View, Text } from "react-native"
import FeedbackTextInput from "../../utils/FeedbackInput"


export interface IRegisterFormProps {
    styles : any,
    formData : any
    onChange : (value : string, key : any) => void
}

const RegisterFormStep1 : React.FC<IRegisterFormProps> = ({ styles, formData, onChange }) => {
    return (
        <View style={styles.form}>
            <FeedbackTextInput style={styles.input} placeholder="Digite seu nome" icon="person" onChangeText={(text : string) => onChange(text, "name")} ></FeedbackTextInput>

            <FeedbackTextInput style={styles.input} placeholder="Digite um email" icon="mail" onChangeText={(text : string) => onChange(text, "email")} ></FeedbackTextInput>
        </View>
    )
}


export default RegisterFormStep1

