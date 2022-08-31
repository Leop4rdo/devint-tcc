import { View, Text } from "react-native"
import FeedbackTextInput from "../../utils/FeedbackInput"


interface IRegisterFormProps {
    styles : any
}

const RegisterFormStep1 : React.FC<IRegisterFormProps> = ({styles}) => {
    return (
        <View>
            <View>
                <Text style={styles.textInput}>Nome:</Text>
                <FeedbackTextInput style={styles.input} placeholder="Digite seu nome" icon="person" onChangeText={(text : string) => {}} ></FeedbackTextInput>
            </View>

            <View>
                <Text style={styles.textInput}>Email</Text>
                <FeedbackTextInput style={styles.input} placeholder="Digite um email" icon="mail" onChangeText={(text : string) => {}} ></FeedbackTextInput>
            </View>       
        </View>
    )
}


export default RegisterFormStep1

