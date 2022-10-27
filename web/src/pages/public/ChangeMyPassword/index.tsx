import LoginWrapper from "components/layout/LoginWrapper"
import ForgotMyPasswordStep1 from "components/RegisterForms/ForgetMyPasswordPage/Step1";
import ForgotMyPasswordStep2 from "components/RegisterForms/ForgetMyPasswordPage/Step2";
import Input from "components/shared/Input";
import React from "react"
import { useState } from "react";
import * as authService from "services/auth.service";
import { useNavigate, useParams } from "react-router-dom";

const ChangeMyPasswordPage: React.FC = () => {
    const navigate = useNavigate()
    const {token} = useParams()

    const [formValues, setFormValues] = useState({
        password : "",
        confirmPassword : ""
    })

    const handleChange = (e : any) => {
        setFormValues({
            ...formValues,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = async () => {
        if (formValues.password != formValues.confirmPassword && formValues.password.length > 4) return

        const res = await authService.changePassword({
            password : formValues.password,
            token : token || ""
        })

        console.log(res)

        if (res.hasError) 
            return alert("Um erro inesperado aconteceu, tente novamente mais tarde")
        
        navigate("/")
    }

    return(
       <LoginWrapper>
            <div className="container-new-password">
                <h1>Crie uma nova senha.</h1>
                <p>Crie uma senha com pelo menos 4 caracteres.</p>
                <Input icon="lock" placeholder="Senha" name="password" type="password" onChange={handleChange}/>
                <Input icon="lock" placeholder="Confirme a Senha" name="confirmPassword" type="password" onChange={handleChange} validate={() => formValues.password === formValues.confirmPassword}/>
                <button className="register-button btn-secondary" onClick={onSubmit}>Redefinir senha</button>
            </div>
       </LoginWrapper> 
    )
}   

export default ChangeMyPasswordPage