import { View, Text } from "react-native"
import FeedbackTextInput from "../../utils/FeedbackInput"


interface IRegisterFormProps {
    styles : any
}

const RegisterFormStep1 : React.FC<IRegisterFormProps> = ({styles}) => {
    return (
        <View style={styles.form}>
            <FeedbackTextInput style={styles.input} placeholder="Digite seu nome" icon="person" onChangeText={(text : string) => {}} ></FeedbackTextInput>

            <FeedbackTextInput style={styles.input} placeholder="Digite um email" icon="mail" onChangeText={(text : string) => {}} ></FeedbackTextInput>
        </View>
    )
}


export default RegisterFormStep1

