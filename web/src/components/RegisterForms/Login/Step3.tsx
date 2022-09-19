import React from "react";
import Button from "components/shared/Button";
import Icon from "components/shared/Icon";


interface IForgetPasswordProps {
    OnClickComeBack?: any,
}

const ContainerConfirmationUser: React.FC<IForgetPasswordProps> = ({OnClickComeBack}) => {
    return (
        <div className="container-comfirmation-user">
            <h1>Acabamos de enviar um link para o seu e-mail</h1>
            <p>Acesse seu e-mail e entre diretamente pelo link enviado</p>

            <Button children={ <Icon name="arrow_back" />} onClick={OnClickComeBack} ></Button>
        </div>
    )
}

export default ContainerConfirmationUser