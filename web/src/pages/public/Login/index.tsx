
import React, { useContext, useState } from "react";
import { AuthContext } from "store/context/Auth.context";
import { Link, Navigate, useNavigate } from "react-router-dom"
import Input from "components/shared/Input";
import LoginWrapper from "../../../components/LoginWrapper/index";



const LoginPage: React.FC = () => {
    
    const navigate = useNavigate()

    const authContext = useContext(AuthContext);


    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e: any) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const login = async () => {
        const res = await authContext?.signIn(formValues.email, formValues.password)

        if (res.hasError) alert("Usuário ou senha invalidos!")

    }

    return (
        <div className="login-page">
            <LoginWrapper>
                <div className="login-container">

                    <h2>Entrar</h2>
                    <Input icon="email" placeholder={"Email"} name="email" type="email" onChange={handleChange}/>
                    <Input icon="lock" placeholder={"Senha"} name="password" type="password" onChange={handleChange}/>
                    <Link  to='/forgot-my-password'>Esqueci minha senha</Link>

                    <button className="register-button btn-primary" onClick={login}>LOGIN</button>

                    <p>ou</p>

                    <div className="button-container">
                        <button className="register-button btn-secondary"> <img src="assets/icons/github.svg" alt="" /></button>
                        <button className="register-button btn-secondary" >
                            <img src="assets/icons/google.svg" alt="" />
                        </button>
                    </div>

                    <Link className="container-new-user" to='/register'>Sou novo aqui</Link>

                </div>
            </LoginWrapper>
        </div>

    )
}

export default LoginPage