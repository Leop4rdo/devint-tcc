
import LogoComponent from "components/utils/Logo";
import React, { useContext, useState } from "react";
import { AuthContext } from "store/context/Auth.context";
import Step2 from "../../components/RegisterForms/Login/Step2"
import Step1 from "../../components/RegisterForms/Login/Step1"

const LoginPage: React.FC = () => {

    const authContext = useContext(AuthContext);

    const [currentStep ,  setCurrentStep] = useState(0)

    const steps=[
        {component: <Step1 />},
        {component:<Step2 />},
    ]

    const onPreviousButtonPress = () => {

        if (currentStep >= 1) {
            setCurrentStep(currentStep - 1)
        }
    }

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