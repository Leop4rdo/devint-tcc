import { Text, View } from "react-native"
import FeedbackTextInput from "../../components/shared/FeedbackInput";
import styles from "./style" ;
import ButtonComponent from "../../components/shared/Button";
import colors from "../../styles/colors";
import { IPageProps } from "../../navigators";

const LandingPage : React.FC< IPageProps >  = ({ navigation }) => {

    return (
         <View style={styles.container}>
            <Text style={styles.logo}>DevInterection</Text>
            <View style={styles.main}>
                <Text style={styles.welcome}>Seja Bem Vindo</Text>
                <Text style={styles.message}>Dev Int conecta todos no processo de aprimoramento pessoal e em equipe </Text>
            </View>
            <View>
                <ButtonComponent text="login" onPress={() => navigation.navigate('login')}/>
                <ButtonComponent text="cadastrar" onPress={() => navigation.navigate('register')}></ButtonComponent>
            </View>
        </View>
        
    )
}

export default LandingPage;
