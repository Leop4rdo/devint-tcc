
import LogoComponent from "components/utils/Logo";
import React, { useContext, useState } from "react";
import { AuthContext } from "store/context/Auth.context";
import Step1 from "../../components/RegisterForms/Login/Step1"
import Step2 from "../../components/RegisterForms/Login/Step2"
import Step3 from "../../components/RegisterForms/Login/Step3"

const LoginPage: React.FC = () => {

    const authContext = useContext(AuthContext);

    const [currentStep ,  setCurrentStep] = useState(0)
    
    const onConfirmButtonPress = () => {

        if (currentStep >= steps.length - 1)
            return
        else
            setCurrentStep(currentStep + 1)
    }

    const onPreviousButtonPress = () => {

        if (currentStep >= 1) {
            setCurrentStep(currentStep - 1)
        }
        if(currentStep === 2){
            setCurrentStep(currentStep - 2 )
        }
        
    }

    const steps=[
        {component: <Step1 OnClick={onConfirmButtonPress}/>},
        {component: <Step2 OnClickButton={onConfirmButtonPress} OnClickComeBack={onPreviousButtonPress}/>},
        {component: <Step3 OnClickComeBack={onPreviousButtonPress}/>},
    ]

    const [formValues, setFormValues] = useState({
        email : "",
        password : ""
    })

    const handleChange = (e : any) => {
        setFormValues({
            ...formValues,
            [e.target.name] : e.target.value
        })
    }  

    const login = async () => {
        const res = await authContext?.signIn(formValues.email, formValues.password)

        if (res.hasError) alert("Usuário ou senha invalidos!")
    }

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    }



    return (
        <div className="login-page">
            <header>
                <h1><LogoComponent secondary="#1F252F" primary="#7865FF" /></h1>
            </header>

            <main>
                <div className="image-container">
                    <img src="../assets/images/svg/login.svg" className="login-image" />
                </div>
                <div className="login-wrapper">

                    <div className="menu-container">
                        <nav>
                            <ul>
                                <li><a href="#">Sobre Nós</a></li>
                                <li><a href="#">Desenvolvedores</a></li>
                                <li><a href="#">Empresas</a></li>
                            </ul>
                        </nav>
                    </div>

                    {steps[currentStep].component}

                </div>
            </main>

        </div>

    )
}

export default LoginPage