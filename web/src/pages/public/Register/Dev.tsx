import React, { useContext } from "react";
import { useState } from "react";
import DevForm1 from "components/RegisterForms/Dev/Step1";
import DevForm2 from "components/RegisterForms/Dev/Step2";
import Button from "components/shared/Button";
import Icon from "components/shared/Icon";

import { isValidDate, isValidEmail } from "utils/validations";
import * as AuthService from "services/auth.service";
import { AuthContext } from "store/context/Auth.context";

import { Link, useNavigate } from "react-router-dom";



const DevRegistrationPage: React.FC = () => {
    const navigate = useNavigate()
    const authContext = useContext(AuthContext)
    const [ ValidadeUserGithub , setValidadeUserGithub] = useState(false)

    

    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        birthday: "",
        gender: "",
        password: "",
        confirmPassword: "",
        termsOfAcceptance: "",
        githubUser: "",
    })

    const [currentStep, setCurrentStep] = useState(0);

    const handleChange = (e: any) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const apiGithub = async () => {
        if( formValues.githubUser.length > 3) {
            fetch(`https://api.github.com/users/${formValues.githubUser}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((resposta) => resposta.json())
            .then((data) => {

                if(data.id)
                    setValidadeUserGithub(true)
                else if(data.message === 'Not Found' || data.message)
                    setValidadeUserGithub(false)
                

                console.log(data)
            })
            .catch((data) => {
                setValidadeUserGithub(true)
                console.log(data)
            })
        }
        
    }
    const steps = [
        { desc: "", component: <DevForm1  onSubmit={() => { }} formData={formValues} onChange={handleChange} /> },
        { desc: "", component: <DevForm2 apiGit={apiGithub} ValidadeUserGithub={ValidadeUserGithub} onSubmit={() => { }} formData={formValues} onChange={handleChange} /> },
    ]

    const isFormValid = () => {
        if (currentStep == 0) {
            if (!isValidEmail(formValues.email)) return false;

            if (formValues.name.length < 3) return false;

            if (!isValidDate(formValues.birthday)) return false;

            if (formValues.gender.length > 1) return false;
        }

        if (currentStep == 1) {

            if (formValues.githubUser.length <= 0 ) return false

            if (formValues.password.length <= 0 ) return false

            if (formValues.confirmPassword.length <= 0 ) return false

            if (formValues.password !== formValues.confirmPassword) return false;

            if (formValues.termsOfAcceptance == 'off') return false;

            if (!ValidadeUserGithub) return false;

        }

        return true;

    }

    
    const onConfirmButtonPress = () => {
        
        if (!isFormValid()) 
            return alert("Por favor, verifique se os dados estão corretos!")
        else if(currentStep < steps.length -1)
            setCurrentStep(currentStep + 1)
        /* else if(!ValidadeUserGithub){
            apiGithub(formValues.githubUser)
            return alert("Verifique o nome de usuario do seu github, algo está errado !")
        } */
        else   
            register()
    }
    
    const register = async () => {

        const birthdayAsArray = formValues.birthday.split('/')
        const birthday = [birthdayAsArray[2], birthdayAsArray[1], birthdayAsArray[0]].join('/') 
        
        const body = {
            name: formValues.name,
            email: formValues.email,
            birthday: birthday,
            gender: formValues.gender,
            password: formValues.password,
            githubUsername: formValues.githubUser,
        }

        const res = await AuthService.register(body)

        if (res.hasError)
            return alert("Por favor, verifique se os dados estão corretos!")    

        authContext?.signIn(body.email, body.password);    
        
        navigate("/")
    }

    const onPreviousButtonPress = () => {
        if (currentStep > 0 && currentStep < steps.length) {
            setCurrentStep(currentStep - 1)
        } else {
            navigate("/")
        }
    }


    return (
        <div className="dev-registration-page">

            <div className="registration-form-container">

                <div className="dev-user">

                    <Button onClick={onPreviousButtonPress} >
                        <Icon name="arrow_back" />
                    </Button>

                    <h2>Sou Dev</h2>

                </div>

                {steps[currentStep].component}

                <div className="button-container">

                    <Button type="submit" children={(currentStep >= steps.length - 1) ? 'Cadastrar' : ["Proximo", <Icon name="arrow_forward" />]} onClick={onConfirmButtonPress} className="btn-primary" ></Button>

                </div>

            </div>

            <div className="image-container">
                <img src="assets/images/svg/dev-img.svg" alt="developer on a computer" />
            </div>

        </div>
    )
};

export default DevRegistrationPage;