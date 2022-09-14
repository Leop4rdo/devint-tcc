import React from "react";
import Input from "components/utils/Input";
import Button from "components/utils/Button";

const ContainerForgetPassword: React.FC = () => {
    return (
        <div className="container-forget-password">
            <h1>Esqueceu a senha ?</h1>
            <p>Redefina a sua senha em duas etapas rapidas</p>
            <Input icon="mail" type="text" placeholder="E-mail" onChange={() => { }} />
            <Button type="submit" children={"Redefinir Senha"} className="btn-primary" />
        </div>
    )
}

export default ContainerForgetPassword