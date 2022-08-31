import { View, Text } from "react-native"
import FeedbackTextInput from "../../utils/FeedbackInput"


interface IRegisterFormProps {
    styles : any
}

const RegisterFormStep2 : React.FC<IRegisterFormProps> = ({styles}) => {
    return(
        <View>
             <View>
                <Text style={styles.textInput}>Data de Nascimento</Text>
                <FeedbackTextInput style={styles.input} placeholder="" icon="perm-contact-calendar" onChangeText={(text : string) => {}} ></FeedbackTextInput>
             </View>
            
            <Text style={styles.textInput}>Telefone:</Text>
            <FeedbackTextInput style={styles.input} placeholder="" icon="phone-iphone" onChangeText={(text : string) => {}} ></FeedbackTextInput>
        </View>
    )
}

export default RegisterFormStep2