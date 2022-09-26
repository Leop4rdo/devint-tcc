import { Text, View } from "react-native"
import styles from "./style";
import Header from '../../../components/shared/Header';
import ButtonComponent from "../../../components/shared/Button";
import { IPageProps } from "../../../navigators";

const LandingPage: React.FC<IPageProps> = ({ navigation }) => {

    return (

        <View style={styles.container}>
        <Header/>

            <View>
                <View>
                        <Text style={styles.textWelcome}>Bem Vindo</Text>
                        <Text style={styles.textMessageWelcome}>Dev Int conecta todos no processo de aprimoramento pessoal e em equipe </Text>
                </View>
                <View style={styles.containerButtons}>
                    <ButtonComponent text="login" onPress={() => navigation.navigate('login')} />
                    <ButtonComponent text="cadastrar" onPress={() => navigation.navigate('register')}></ButtonComponent>
                </View>
            </View>
        </View>



        
    )
}

export default LandingPage;
