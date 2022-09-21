import {View, Text, TextInput} from 'react-native';
import Logo from '../../../components/shared/Logo';
import { IPageProps } from "../../../navigators"
import styles from './style'
import FeedbackTextInput from '../../../components/shared/FeedbackInput';
import ButtonComponent from '../../../components/shared/Button';
import LoginFormStep1 from '../../../components/login/forms/Step1'
import LoginFormStep2 from '../../../components/login/forms/Step2'
import { useState } from 'react';

const LandingPage: React.FC<IPageProps> = () => {

    const [currentStep, setCurrentStep] = useState(0);
        const steps = [
            {
                desc: 'Por favor insira seu email',
                component: <LoginFormStep1 styles={styles} />
            },
            {
                desc: 'Acesse seu e-mail e entre diretamente pelo link enviado',
                component: <LoginFormStep2 />
            },

        ]

        const onConfirmButtonPress = () => {
            if (currentStep < steps.length-1){
                setCurrentStep(currentStep + 1)
            } 
        }

    return(
       <View style={styles.container}>
            <Logo />
            <View style={styles.containerTexts}>
               <Text style={styles.TextForgetPassword}>Esqueci minha senha</Text>
               <Text style={styles.TextinsertEmail}>{steps[currentStep].desc}</Text>
           </View>
            {steps[currentStep].component}
       </View>
    )

}

export default LandingPage