import { Text, View} from "react-native"
import Hello from "../../components/Hello";
import styles from "./style" ;
import ButtonComponent from "../../components/utils/Button";
import RegisterFormStep1 from "../../components/register/forms/Step1";
import RegisterFormStep2 from "../../components/register/forms/Step2";
import RegisterFormStep3 from "../../components/register/forms/Step3";
import { useCallback, useContext, useState } from "react";
import { isEmail, isEmpty } from "../../utils/validation";
import { getStateFromPath } from "@react-navigation/native";
import * as AuthService from "../../services/auth.service";
import { AuthContext } from "../../store/context/Auth.context";

const RegisterPage : React.FC = () => {
    const authContext = useContext(AuthContext)

    const [formValues, setFormValues] = useState({
        name : "",
        email : "",
        birthday : "",
        github : "",
        password : ""
    }) 

    const [currentStep, setCurrentStep] = useState(0);

    const handleChange = (text : string, key : keyof typeof formValues) => {
        setFormValues({
            ...formValues,
            [key] : text
        })
    }

    const steps = [
        {
            desc : "Vamos começar com seu nome e email", 
            component : <RegisterFormStep1 formData={formValues} onChange={handleChange} styles={styles} />
        },
        {
            desc : "Quando você nasceu?", 
            component : <RegisterFormStep2 formData={formValues} onChange={handleChange} styles={styles} />
        },
        {
            desc : "Qual vai ser a sua senha?", 
            component : <RegisterFormStep3 formData={formValues} onChange={handleChange} styles={styles} />
        }
    ]

    const isFormValid = () => {
        if (!isEmail(formValues.email)) return false

        if (formValues.name.length < 3) return false

        if (isEmpty(formValues.birthday)) return false

        // if (isEmpty(formValues.github)) return false

        if (isEmpty(formValues.password)) return false

        return true
    }

    const onConfirmButtonPress = () => {
        if (currentStep < steps.length-1)
            return setCurrentStep(currentStep + 1)

        if (!isFormValid()) 
            return alert("Por favor verifique se os dados estão corretos")

        register()
    }

    const register = async () => {
        const body = {
            name : formValues.name,
            email : formValues.email,
            password : formValues.password,
            birthday : formValues.birthday, // formatar para aaaa/mm/dd
            githubProfileUrl : formValues.github
        }

        const res = await AuthService.register(body)
        
        console.log(res)

        if (res.hasError)
            return alert("Por favor verifique se os dados estão corretos")

        authContext?.signIn(body.email, body.password);
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
