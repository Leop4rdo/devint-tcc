import React from "react";
import Input from "components/utils/Input"
import { Button } from "@mui/material";

const LoginPage: React.FC = () => {

    return (
        <div className="login-page">
            <header><h1>Bem vindo</h1></header>

            <main>
                <h2>Entrar</h2>
                <Input icon="email" placeholder={"Senha"} onChange={() => { }} />
                <Input icon="lock" placeholder={"Email"} onChange={() => { }} />
                <a href="#">Esqueci minha senha</a>
                <Button>Login</Button>

                <div className="teste">
                

                    
                <Button className="logins">

                </Button>

                <Button className="logins">

                </Button>
                </div>
            </main>
        </div>
            
    )
}

export default LoginPage