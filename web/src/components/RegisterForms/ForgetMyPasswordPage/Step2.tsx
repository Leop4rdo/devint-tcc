import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "components/shared/Button";
import Icon from "components/shared/Icon";


const ForgotMyPasswordStep2: React.FC = () => {
    let navigate = useNavigate()
    return (
        <div className="container-comfirmation-user">
            <h1>Enviamos um link para o seu e-mail</h1>
            <p>Acesse seu e-mail e entre diretamente pelo link enviado</p>

            <Button children={ <Icon name="arrow_back" />} onClick={() => navigate('/')} ></Button>
        </div>
    )
}

export default ForgotMyPasswordStep2