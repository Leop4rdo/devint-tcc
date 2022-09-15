import React from "react";
import Input from "components/utils/Input";
import Button from "components/utils/Button";
import Icon from "components/utils/Icon";
import { Link } from "react-router-dom";

interface IForgetPasswordProps {
    OnClick?: any,
}

const ContainerForgetPassword: React.FC<IForgetPasswordProps> = ({ OnClick }) => {
    return (
        <div className="container-forget-password">
            <h1>Esqueceu a senha ?</h1>
            <p>Redefina a sua senha em duas etapas rapidas</p>
            <Input icon="mail" type="text" placeholder="E-mail" onChange={() => { }} />
            <Button type="submit" children={"Redefinir Senha"} className="btn-primary" onClick={OnClick} />

            <div className="come-back-login">
            <Button children={ <Icon name="arrow_back" />}></Button>
            </div>
        </div>


    )
}

export default ContainerForgetPassword