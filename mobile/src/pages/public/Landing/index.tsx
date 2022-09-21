import { Text, View, ImageBackground } from "react-native"
import styles from "./style";
import Logo from '../../../components/shared/Logo';
import ButtonComponent from "../../../components/shared/Button";
import { IPageProps } from "../../../navigators";

const LandingPage: React.FC<IPageProps> = ({ navigation }) => {

    return (

        <View style={styles.container}>
            
        <Logo />

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
