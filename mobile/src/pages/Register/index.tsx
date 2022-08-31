import { Text, View } from "react-native"
import Hello from "../../components/Hello";
import FeedbackTextInput from "../../components/FeedbackInput";
import styles from "./style" ;
import ButtonComponent from "../../components/Button";

const RegisterPage : React.FC = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>DevInterction</Text>
            <Text style={styles.signUp}>Cadastre-se</Text>
            <View>
                <FeedbackTextInput style={styles.name} width={256} placeholder="Digite seu nome" icon="account-circle" ></FeedbackTextInput>
                <FeedbackTextInput width={256} placeholder="Digite um email" icon="" ></FeedbackTextInput>
            </View>
            <View>
                <ButtonComponent text="PROXIMO"></ButtonComponent>
            </View>
        </View>
    )
}

export default RegisterPage;
