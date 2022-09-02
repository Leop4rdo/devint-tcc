import React from "react";
import Input from "components/utils/Input"
import { Button } from "@mui/material";
import Icon from "components/utils/Icon";

const LoginPage: React.FC = () => {

    return (
        <div className="login-page">
            <header><h1>Bem vindo</h1></header>

            
            <main>
                <div className="image-container">
                    <img src="assets/images/imglogin.svg" className="login-image"/>
                </div>
               <div className="login-wrapper">
                <div className="login-container">
                        <h2>Entrar</h2>
                        <Input icon="email" placeholder={"Senha"} onChange={() => { }} type="email" />
                        <Input icon="lock" placeholder={"Email"} onChange={() => { }} type="password" />
                        <a href="#">Esqueci minha senha</a>

                        <Button className="button-login">Login</Button>

                        <span>ou</span>
                        
                        <div className="button-container">
                            <Button className="login-pairing"> <img src="assets/icons/github.svg" alt="" /></Button>
                            <Button className="login-pairing" > 
                            <img src="assets/icons/google.svg" alt="" /> 
                             </Button>
                            
                        </div>
                        <div className="container-new-user"> 
                            <a href="#">Sou novo aqui</a>
                        </div>
                        
                    </div>
               </div>
            </main>

        </div>

    )
}

export default LoginPage