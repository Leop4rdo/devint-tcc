import Button from "components/utils/Button";
import Input from "components/utils/Input";
import LogoComponent from "components/utils/Logo";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "store/context/Auth.context";

const LoginPage: React.FC = () => {
    const authContext = useContext(AuthContext);

    const [formValues, setFormValues] = useState({
        email : "",
        password : ""
    })

    const handleChange = (e : any) => {
        setFormValues({
            ...formValues,
            [e.target.name] : e.target.value
        })
    }  

    const login = async () => {
        const res = await authContext?.signIn(formValues.email, formValues.password)

        if (res.hasError) alert("Usuário ou senha invalidos!")
    }

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
                    <img src="../assets/images/svg/login.svg" className="login-image" />
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
                        <Input icon="email" placeholder={"Email"} onChange={handleChange} name="email" type="email" />
                        <Input icon="lock" placeholder={"Senha"} onChange={handleChange} name="password" type="password" />
                        <a href="#">Esqueci minha senha</a>

                        <button className="btn-primary" onClick={login}>LOGIN</button>

                        <p>ou</p>

                        <div className="button-container">
                            <button className="login-pairing btn-primary"> <img src="assets/icons/github.svg" alt="" /></button>
                            <button className="login-pairing btn-primary" >
                                <img src="assets/icons/google.svg" alt="" />
                            </button>
                        </div>
   
                        <Link className="container-new-user" to='/register'>Sou novo aqui</Link>

                    </div>
                </div>
            </main>

        </div>

    )
}

export default LoginPage