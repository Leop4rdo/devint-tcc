import React from "react";
import { useState } from "react";

import DevForm1 from "components/RegisterForms/Dev/Step1";
import DevForm2 from "components/RegisterForms/Dev/Step2";
import Button from "components/utils/Button";
import Icon from "components/utils/Icon";
import { isValidBirthday, isValidEmail } from "utils/validations";
import * as AuthService from "services/auth.service";
import { AuthContext } from "store/context/Auth.context";

const DevRegistrationPage: React.FC = () => {

    const [formValues, setFormValues] = useState ({
        name: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
    })

    const [currentStep, setCurrentStep] = useState(0);

    const handleChange = (text: string, key: keyof typeof formValues) => {
        setFormValues({
            ...formValues,
            [key] : text
        })
    }

    const steps = [
        { desc: "", component: <DevForm1 onSubmit={() => { }} formData={setFormValues} onChange={handleChange} /> },
        { desc: "", component: <DevForm2 onSubmit={() => { }} formData={setFormValues} onChange={handleChange} /> },
    ]

    const isFormValid = () => {

        console.log(formValues);

        if (!isValidEmail(formValues.email)) return false;

        if (formValues.name.length < 3) return false;

        if (!isValidBirthday(formValues.birthday)) return false;

        if (formValues.birthday !== formValues.confirmPassword) return false;

        return true;

    }

    const onConfirmButtonPress = () => {

        if (!isFormValid())
            return alert("Por favor, verifique se os dados estão corretos!")    
        
        if (currentStep >= steps.length - 1)
            return
        else
            setCurrentStep(currentStep + 1)
        
        
        register()    
    }

    const register = async () => {

        console.log("teste");
        
        const body = {
            name: formValues.name,
            email: formValues.email,
            birthday: formValues.birthday,
            password: formValues.password,
        }

        const res = await AuthService.register(body)


        if (res.hasError) 
            return alert ("Por favor, verifique se os dados estão corretos!")

        //AuthContext?.signIn(body.email, body.password);    
        
    }
    
    const onPreviousButtonPress = () => {

        if (currentStep >= 1) {
            setCurrentStep(currentStep - 1)
        }
    }


    return (
        <div className="dev-registration-page">

            <div className="registration-form-container">
                <h2>Sou Dev</h2>

                {steps[currentStep].component}

                <div className="button-container">
                    
                    <Button type="button" children={<Icon name="arrow_back"/>} className={"btn-previous btn-primary step-" + currentStep} onClick={onPreviousButtonPress} ></Button>

                    <Button type="submit" children={(currentStep >= steps.length - 1) ? 'Cadastrar' : ["Proximo", <Icon name="arrow_forward" />]} onClick={onConfirmButtonPress} className="btn-primary" ></Button>

                </div>

                <p>ou</p>

                <Button type="button" className="btn-primary github-register" children={[<img src="../../../assets/icons/github.svg" alt="GitHub logo" />, "Cadatrar-se como GitHub"]}></Button>

            </div>

            <div className="image-container">
                <img src="../assets/images/Svg/dev-img.svg" alt="developer on a computer" />
            </div>

        </div>
    )
};

export default DevRegistrationPage;