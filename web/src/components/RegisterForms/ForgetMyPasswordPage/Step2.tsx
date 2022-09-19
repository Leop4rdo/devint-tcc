import React from "react";
import Button from "components/utils/Button";
import Icon from "components/utils/Icon";
import { useNavigate } from "react-router-dom";


const ContainerConfirmationUser: React.FC = () => {
    let navigate = useNavigate()
    return (
        <div className="container-comfirmation-user">
            <h1>Acabamos de enviar um link para o seu e-mail</h1>
            <p>Acesse seu e-mail e entre diretamente pelo link enviado</p>

            <Button children={ <Icon name="arrow_back" />} onClick={() => navigate('/')} ></Button>
        </div>
    )
}

export default ContainerConfirmationUser