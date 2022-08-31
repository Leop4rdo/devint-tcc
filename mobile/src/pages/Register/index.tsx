import { Text, View} from "react-native"
import Hello from "../../components/Hello";
import styles from "./style" ;
import ButtonComponent from "../../components/utils/Button";
import RegisterFormStep1 from "../../components/register/forms/Step1";
import RegisterFormStep2 from "../../components/register/forms/Step2";
import RegisterFormStep3 from "../../components/register/forms/Step3";

const RegisterPage : React.FC = () => {

    return (
        <View style={styles.container}>
            
            <Text style={styles.logo}>DevInterction</Text>
            <Text style={styles.signUp}>Cadastre-se</Text>
            <RegisterFormStep1 styles={styles} /> 
            {/* <RegisterFormStep2 styles={styles} /> */}
            {/*<RegisterFormStep3 styles={styles} /> */}
            <View>
                <ButtonComponent text="PROXIMO" onPress={()=>{} }></ButtonComponent>
            </View>
        </View>
    )
}

export default RegisterPage;
