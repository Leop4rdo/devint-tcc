import React from "react";
import Input from "components/utils/Input"
import { Button } from "@mui/material";
import { Link } from 'react-router-dom'
import LogoComponent from "components/utils/Logo";

const LoginPage: React.FC = () => {

    return (
        <div className="login-page">
            <header>
                <h1><LogoComponent secondary="#1F252F" primary="#7865FF"/></h1> 
            </header>

            <main>
                <div className="image-container">
                    <img src="assets/images/login.svg" className="login-image" />
                </div>
                <div className="login-wrapper">
                    <div className="login-container">
                        <h2>Entrar</h2>
                        <Input icon="email" placeholder={"Senha"} onChange={() => { }} type="email" />
                        <Input icon="lock" placeholder={"Email"} onChange={() => { }} type="password" />
                        <a href="#">Esqueci minha senha</a>

                        <Button className="button-login">Login</Button>

                        <p>ou</p>

                        <div className="button-container">
                            <Button className="login-pairing"> <img src="assets/icons/github.svg" alt="" /></Button>
                            <Button className="login-pairing" >
                                <img src="assets/icons/google.svg" alt="" />
                            </Button>
                        </div>
                            <Link className="container-new-user" to='/register'>Sou novo aqui</Link>

                    </div>
                </div>
            </main>

        </div>

    )
}

export default LoginPage