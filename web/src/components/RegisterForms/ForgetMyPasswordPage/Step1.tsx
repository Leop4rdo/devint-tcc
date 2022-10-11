
import React, { useState } from "react";
import Input from "components/shared/Input";
import Button from "components/shared/Button";
import Icon from "components/shared/Icon";
import { useNavigate } from "react-router-dom";
import * as authService from "services/auth.service";
import { isValidEmail } from "utils/validations";
interface IForgetPasswordProps {
    next : () => void
}

const ForgotMyPasswordStep1: React.FC<IForgetPasswordProps> = ({ next }) => {
    const navigate =  useNavigate()

    const [email, setEmail] = useState("")

    const onSubmit = async () => {
        if (!isValidEmail(email)) return

        const res = await authService.requestPasswordRecovery(email)

        if (res.hasError)
            alert('Um erro inesperado aconteceu, tente novamente mais tarde')
        else
            next()
    }

    return (
        <div className="container-forget-password">
            <h1>Esqueceu a senha ?</h1>
            <p>Redefina a sua senha em duas etapas rapidas</p>
            <Input icon="mail" value={email} type="text" placeholder="E-mail" onChange={(e : any) => setEmail(e.target.value)} validate={() => isValidEmail(email)}/>
            <button type="submit" className="btn-primary" onClick={onSubmit} >Redefinir senha</button>
            
            <div className="come-back-login">
                <button onClick={() => navigate(-1)} ><Icon name="arrow_back" /></button>
            </div>
        </div>
    )
}

export default ForgotMyPasswordStep1