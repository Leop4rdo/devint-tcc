import React from "react";
import Input from "components/shared/Input";
import Button from "components/shared/Button";
import Icon from "components/shared/Icon";
import { Link } from "react-router-dom";

interface IForgetPasswordProps {
    OnClickButton?: any,
    OnClickComeBack?:any,
}

const ContainerForgetPassword: React.FC<IForgetPasswordProps> = ({ OnClickButton , OnClickComeBack }) => {
    return (
        <div className="container-forget-password">
            <h1>Esqueceu a senha ?</h1>
            <p>Redefina a sua senha em duas etapas rapidas</p>
            <Input icon="mail" type="text" placeholder="E-mail" onChange={() => { }} />
            <Button type="submit" children={"Redefinir Senha"} className="btn-primary" onClick={OnClickButton} />

            <div className="come-back-login">
            <Button children={ <Icon name="arrow_back" />} onClick={OnClickComeBack} ></Button>
            </div>
        </div>


    )
}

export default ContainerForgetPassword