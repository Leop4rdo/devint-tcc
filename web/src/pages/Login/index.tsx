import React from "react";
import Input from "components/utils/Input"
import { Button } from "@mui/material";

const LoginPage: React.FC = () => {

    return (
        <div className="login-page">
            <header><h1>Bem vindo</h1></header>

            <main>
                <div className="login-container">
                <h2>Entrar</h2>
                <Input icon="email" placeholder={"Senha"} onChange={() => { }} />
                <Input icon="lock" placeholder={"Email"} onChange={() => { }} />
                <a href="#">Esqueci minha senha</a>
                <Button>Login</Button>

                <div className="logins">
                 
                <hr /><span>ou</span><hr />
               
                </div>
                </div>
            </main>
        </div>
            
    )
}

export default LoginPage