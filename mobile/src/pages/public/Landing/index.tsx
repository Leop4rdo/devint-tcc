import { Pressable, Text, View } from "react-native"
import styles from "./style";
import Header from '../../../components/shared/Header';
import ButtonComponent from "../../../components/shared/Button";
import { IPageProps } from "../../../navigators";
import { ScrollView } from "react-native-gesture-handler";
import { ALERT_TYPE, Toast } from "react-native-alert-notification";

const LandingPage: React.FC<IPageProps> = ({ navigation }) => {

    return (

        <View style={styles.container}>
        <Header/>

            <ScrollView>
                <View>
                        <Text style={styles.textWelcome}>Bem Vindo</Text>
                        <Text style={styles.textMessageWelcome}>A rede social profissional feita de desenvolvedores, para desenvolvedores</Text>
                </View>
                <View style={styles.containerButtons}>
                    <ButtonComponent text="login" onPress={() => navigation.navigate('login')} />
                    <ButtonComponent text="cadastrar" onPress={() => navigation.navigate('register')}></ButtonComponent>
                </View>
            </ScrollView>
        </View>
    )
}

export default LandingPage;
