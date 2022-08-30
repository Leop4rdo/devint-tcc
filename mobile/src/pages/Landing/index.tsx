import { Text, View } from "react-native"
import FeedbackTextInput from "../../components/FeedbackInput";
import styles from "./style" ;
import ButtonComponent from "../../components/Button";
import colors from "../../styles/colors";

const LandingPage : React.FC = () => {

    return (
         <View style={styles.container}>
            <Text style={styles.logo}>DevInterection</Text>
            <View style={styles.main}>
                <Text style={styles.welcome}>Seja Bem Vindo</Text>
                <Text style={styles.message}>Dev Int conecta todos no processo de aprimoramento pessoal e em equipe </Text>
            </View>
            <View>
                <ButtonComponent text="login" onPress={() => {}}/>
                <ButtonComponent text="cadastrar" onPress={() => {}}></ButtonComponent>
            </View>
        </View>
        
    )
}

export default LandingPage;
