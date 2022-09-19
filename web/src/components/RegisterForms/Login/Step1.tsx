import Input from "components/shared/Input";
import React from "react";
import { Link } from "react-router-dom"


interface ILoginUserProps{
    OnClick?: any,
}

const ContainerLoginUser: React.FC<ILoginUserProps> = ({OnClick}) => {
    return (
        <div className="login-container">

            <h2>Entrar</h2>
            <Input icon="email" placeholder={"Email"} name="email" type="email" />
            <Input icon="lock" placeholder={"Senha"} name="password" type="password" />
            <a onClick={OnClick}>Esqueci minha senha</a>

            <button className="btn-primary">LOGIN</button>

            <p>ou</p>

            <div className="button-container">
                <button className="login-pairing btn-primary"> <img src="assets/icons/github.svg" alt="" /></button>
                <button className="login-pairing btn-primary" >
                    <img src="assets/icons/google.svg" alt="" />
                </button>
            </div>

            <Link className="container-new-user" to='/register'>Sou novo aqui</Link>

        </div>
    )
}

export default ContainerLoginUser
