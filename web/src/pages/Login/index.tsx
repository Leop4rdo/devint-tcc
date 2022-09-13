import React, { useState } from "react";
import Input from "components/utils/Input"
import Button from "components/utils/Button";
import { Link } from 'react-router-dom'
import LogoComponent from "components/utils/Logo";
import Icon from "components/utils/Icon";

const LoginPage: React.FC = () => {

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    }

    return (
        <div className="login-page">
            <header>
                <h1><LogoComponent secondary="#1F252F" primary="#7865FF" /></h1>
            </header>



            <main>
                <div className="image-container">
                    <img src="../assets/images/Svg/login.svg" className="login-image" />
                </div>
                <div className="login-wrapper">

                    <div className="menu-container">
                        <nav>
                            <ul>
                                <li><a href="#">Sobre Nós</a></li>
                                <li><a href="#">Desenvolvedores</a></li>
                                <li><a href="#">Empresas</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="login-container">

                        <h2>Entrar</h2>

                        <Input icon="email" placeholder="E-mail" onChange={() => { }} type="email" />

                        <div className="password-container">

                            <Input icon="lock" placeholder="Senha" onChange={() => { }} type={passwordShown ? "text" : "password"} />

                            <Button className="btn-toggle-password" onClick={togglePassword} children={<Icon name={passwordShown ? "visibility_off" : "visibility"} />}></Button>

                        </div>

                        <a href="#">Esqueci minha senha</a>

                        <Button className="btn-primary">Login</Button>

                        <p>ou</p>

                        <div className="button-container">
                            <Button className="login-pairing btn-primary"> <img src="assets/icons/github.svg" alt="" /></Button>
                            <Button className="login-pairing btn-primary" >
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