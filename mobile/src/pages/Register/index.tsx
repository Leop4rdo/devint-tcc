import { Text, View} from "react-native"
import Hello from "../../components/Hello";
import styles from "./style" ;
import ButtonComponent from "../../components/utils/Button";
import RegisterFormStep1 from "../../components/register/forms/Step1";
import RegisterFormStep2 from "../../components/register/forms/Step2";
import RegisterFormStep3 from "../../components/register/forms/Step3";
import { useState } from "react";

const RegisterPage : React.FC = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        {desc : "Vamos começar com seu nome e email", component : <RegisterFormStep1 styles={styles} />},
        {desc : "Quando você nasceu?", component : <RegisterFormStep2 styles={styles} />},
        {desc : "Qual vai ser a sua senha?", component : <RegisterFormStep3 styles={styles} />}
    ]

    const onConfirmButtonPress = () => {
        //if (!isFormDataValid()) return

        if (currentStep >= steps.length - 1) 
            return /* go to home */
        else
            setCurrentStep(currentStep+1)
    }

    return (
        <View style={styles.container}>
            
            
            <Text style={styles.logo}>DevInterction</Text>
            <Text style={styles.signUp}>Cadastre-se</Text>
            <Text style={styles.stepDescription}>{steps[currentStep].desc}</Text>

            {steps[currentStep].component}

            <View>
                <ButtonComponent text={(currentStep >= steps.length - 1) ? 'cadastrar' : 'proximo'} onPress={onConfirmButtonPress}></ButtonComponent>
            </View>
        </View>
    )
}

export default RegisterPage;
