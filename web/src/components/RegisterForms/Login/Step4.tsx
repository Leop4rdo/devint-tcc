import React from "react";
import Input from "components/utils/Input";


const ContainerNewPassword: React.FC = () => {

    return(
        <div className="container-new-password">
            <h1>Crie uma nova senha.</h1>
            <p>Crie uma senha com pelo menos 4 caracteres.</p>
            <Input icon="lock" placeholder={"Senha"} name="password" type="password" />
            <Input icon="lock" placeholder={"Senha"} name="password" type="password" />
            <button className="register-button btn-secondary">Redefinir senha</button>
        </div>
    )

}

export default ContainerNewPassword