import { KeyboardAvoidingView, ScrollView, Text, View } from "react-native"
import styles from "./style";
import ButtonComponent from "../../../components/shared/Button";
import RegisterFormStep1 from "../../../components/register/forms/Step1";
import RegisterFormStep2 from "../../../components/register/forms/Step2";
import RegisterFormStep3 from "../../../components/register/forms/Step3";
import { useContext, useState } from "react";
import { isEmail, isEmpty, isValidDate } from "../../../utils/validation";
import * as AuthService from "../../../services/auth.service";
import { AuthContext } from "../../../store/context/Auth.context";
import Header from "../../../components/shared/Header";
import { IPageProps } from "../../../navigators"

const RegisterPage: React.FC<IPageProps> = ({navigation}) => {
    const authContext = useContext(AuthContext)

    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        birthday: "",
        github: "",
        gender : "o",
        password: "",
        confirmPassword: "",
    })

    const [currentStep, setCurrentStep] = useState(0);

    const handleChange = (text: string, key: keyof typeof formValues) => {
        setFormValues({
            ...formValues,
            [key]: text
        })
    }

    const steps = [
        {
            desc: "Vamos começar com seu nome e email",
            component: <RegisterFormStep1 formData={formValues} onChange={handleChange} styles={styles} />,
            isValid: () => formValues.name.length > 2 && isEmail(formValues.email)
        },
        {
            desc: "Quando você nasceu e qual o seu gênero?",
            component: <RegisterFormStep2 formData={formValues} onChange={handleChange} styles={styles} />,
            isValid: () => isValidDate(formValues.birthday)
        },
        {
            desc: "Qual vai ser a sua senha?",
            component: <RegisterFormStep3 formData={formValues} onChange={handleChange} styles={styles} />,
            isValid: () => !isEmpty(formValues.password) && formValues.password === formValues.confirmPassword
        }
    ]

    const isFormValid = () => {
        let res = true;

        for (const step of steps) {
            if (!res) break;

            res = step.isValid()
        }

        return res
    }

    const onConfirmButtonPress = () => {
        if (currentStep < steps.length - 1) {
            if (!steps[currentStep].isValid())
                return alert("Por favor verifique se os dados estão corretos")

            setCurrentStep(currentStep + 1)

            return
        }

        if (!isFormValid())
            return alert("Por favor verifique se os dados estão corretos")

        register()
    }

    const onPreviousButtonPress = () => {

        if (currentStep >= 1) {
            setCurrentStep(currentStep - 1)
        }
    }

    const register = async () => {
        const birthdayAsArray = formValues.birthday.split('/')
        const birthday = [birthdayAsArray[2], birthdayAsArray[1], birthdayAsArray[0]].join('/')

        const body = {
            name: formValues.name,
            email: formValues.email,
            password: formValues.password,
            birthday: birthday,
            gender : formValues.gender,
            githubUsername: formValues.github,
        }

        const res = await AuthService.register(body)

        if (res.hasError)
            return alert("Por favor verifique se os dados estão corretos")

        authContext?.signIn(body.email, body.password);
    }

    return (
        <KeyboardAvoidingView style={styles.containerRegister}>
            <Header showIcon={false} onPressIcon={currentStep >= 1 ? onPreviousButtonPress : () => navigation.navigate('landing')}/>

            <ScrollView>
                <View style={styles.containerRegisterForm}>
                    <View>
                        <Text style={styles.signUp}>Cadastre-se</Text>
                        <Text style={styles.stepDescription}>{steps[currentStep].desc}</Text>
                    </View>

                    {steps[currentStep].component}

                    <ButtonComponent text={(currentStep >= steps.length - 1) ? 'cadastrar' : 'proximo'} onPress={onConfirmButtonPress}></ButtonComponent>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default RegisterPage;
