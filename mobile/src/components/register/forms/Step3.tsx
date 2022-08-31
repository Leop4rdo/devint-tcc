import { View, Text } from "react-native"
import FeedbackTextInput from "../../utils/FeedbackInput"


interface IRegisterFormProps {
    styles : any
}

const RegisterFormStep3 : React.FC<IRegisterFormProps> = ({styles}) => {
    return(
        <View>
             <View>
                <Text style={styles.textInput}>Crie uma senha</Text>
                <FeedbackTextInput style={styles.input} placeholder="" icon="lock" onChangeText={(text : string) => {}} ></FeedbackTextInput>
             </View>

             <View>
                <Text style={styles.textInput}>Confirme sua Senha</Text>
                <FeedbackTextInput style={styles.input} placeholder="" icon="lock-clock" onChangeText={(text : string) => {}} ></FeedbackTextInput>
             </View>
            
           
        </View>
    )
}

export default RegisterFormStep3