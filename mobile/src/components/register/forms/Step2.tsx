import { View, Text } from "react-native"
import FeedbackTextInput from "../../utils/FeedbackInput"


interface IRegisterFormProps {
    styles : any
}

const RegisterFormStep2 : React.FC<IRegisterFormProps> = ({styles}) => {
    return(
        <View style={styles.form}>
            <FeedbackTextInput style={styles.input} placeholder="" icon="calendar-today" onChangeText={(text : string) => {}} ></FeedbackTextInput>
        </View>
    )
}

export default RegisterFormStep2