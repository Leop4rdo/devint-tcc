import React from "react";
import Input from "components/utils/Input"
import { Button } from "@mui/material";
import { Link } from 'react-router-dom'

const LoginPage: React.FC = () => {

    return (
        <div className="login-page">
            <header>

            <div>
                <h1>Bem vindo</h1> 
            </div>
                <div>
                    <svg width="100%" height="10%" viewBox="0 0 1308 208" fill="none" xmlns="http://www.w3.org/2000/svg">
                      
                        <path d="M1307.01 154.911L1252.55 143.858C1198.09 132.804 1089.17 110.697 980.257 99.6547C871.339 88.6125 762.424 88.6354 653.514 110.788C544.603 132.942 435.698 177.225 326.786 195.713C217.875 213.924 108.959 207.031 54.5002 203.101L0.0419187 199.447L2.08616e-05 0.274964L54.4576 0.263508C108.915 0.252053 217.83 0.229141 326.745 0.20623C435.66 0.183318 544.576 0.160407 653.491 0.137496C762.406 0.114584 871.321 0.0916727 980.236 0.0687613C1089.15 0.0458498 1198.07 0.0229384 1252.52 0.0114827L1306.98 2.69586e-05L1307.01 154.911Z" fill="#A587FA" />
                    </svg>
                </div>

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
                        <div className="container-new-user">
                            <Link to='/register'>Sou novo aqui</Link>
                        </div>

                    </div>
                </div>
            </main>

        </div>

    )
}

export default LoginPage