import {View, Text, TextInput} from 'react-native';
import Header from '../../../components/shared/Header';
import { IPageProps } from "../../../navigators"
import styles from './style'
import LoginFormStep1 from '../../../components/ForgotMyPasswordForms/Step1'
import LoginFormStep2 from '../../../components/ForgotMyPasswordForms/Step2'
import { useState } from 'react';
import ButtonComponent from '../../../components/shared/Button';

const LandingPage: React.FC<IPageProps> = ({navigation}) => {

    const [currentStep, setCurrentStep] = useState(0);
      
        const onConfirmButtonPress = () => {
            if (currentStep < steps.length-1){
                setCurrentStep(currentStep + 1)
            } 
        }

        const onPreviousButtonPress = () => {

            if (currentStep >= 1) {
                setCurrentStep(currentStep - 1)
            }
        }

        const steps = [
            {
                desc: 'Por favor insira seu email',
                component: <LoginFormStep1 styles={styles} next={onConfirmButtonPress} />
            },
            {
                desc: 'Acesse seu e-mail e entre diretamente pelo link enviado',
                component: <LoginFormStep2 styles={styles} onClickStep={onPreviousButtonPress} />
            },

        ]

    return(
       <View style={styles.container}>
            <Header showIcon={false} onPressIcon={ currentStep >=1 ? onPreviousButtonPress : () => navigation.navigate('login') }/>
            <View style={styles.formContainer}>
                <View style={styles.containerTexts}>
                    <Text style={styles.TextForgetPassword}>Esqueci minha senha</Text>
                    <Text style={styles.TextinsertEmail}>{steps[currentStep].desc}</Text>
                </View>
                {steps[currentStep].component}
            </View>
       </View>
    )

}

export default LandingPage