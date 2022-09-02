import React from "react";
import Input from "components/utils/Input"
import { Button } from "@mui/material";
import Icon from "components/utils/Icon";

const LoginPage: React.FC = () => {

    return (
        <div className="login-page">
            <header><h1>Bem vindo</h1></header>

            <div className="image-container">
                <img src="assets/images/imglogin.svg" />
            </div>
            <main>
                <div className="login-container">
                    <h1>Entrar</h1>
                    <Input icon="email" placeholder={"Senha"} onChange={() => { }} type="email" />
                    <Input icon="lock" placeholder={"Email"} onChange={() => { }} type="password" />
                    <a href="#">Esqueci minha senha</a>

                    <Button className="btnloguin">Login</Button>

                    <div className="logins">

                        <hr /><span>ou</span><hr />

                        <Button className="login-pairing">icone</Button>
                        <Button className="login-pairing" >  <Icon name="public" /> </Button>

                    </div>
                    <a href="#" id="txt-new-user">Sou novo aqui</a>
                </div>
            </main>


        </div>

    )
}

export default LoginPage