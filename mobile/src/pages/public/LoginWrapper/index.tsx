import {View, Text, TextInput} from 'react-native';
import Logo from '../../../components/shared/Logo';
import { IPageProps } from "../../../navigators"
import styles from './style'
import LoginFormStep1 from '../../../components/loginwrapper/forms/Step1'
import LoginFormStep2 from '../../../components/loginwrapper/forms/Step2'
import { useState } from 'react';

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
                component: <LoginFormStep1 styles={styles} onClickStep={onConfirmButtonPress} />
            },
            {
                desc: 'Acesse seu e-mail e entre diretamente pelo link enviado',
                component: <LoginFormStep2 styles={styles} onClickStep={onPreviousButtonPress} />
            },

        ]

    return(
       <View style={styles.container}>
            <Logo onPressIcon={onPreviousButtonPress}/>
            <View style={styles.containerTexts}>
               <Text style={styles.TextForgetPassword}>Esqueci minha senha</Text>
               <Text style={styles.TextinsertEmail}>{steps[currentStep].desc}</Text>
           </View>
            {steps[currentStep].component}
       </View>
    )

}

export default LandingPage