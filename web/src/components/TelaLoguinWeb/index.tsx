import React from "react";
import Input from "components/utils/Input"
interface IHelloProps {
    name?: string;
}

const Hello : React.FC<IHelloProps> = () => {

    return (
        <>

        <header>
        <h1>Bem vindo</h1>
        </header>

        <main>
        <div className="hello-container">
            <h2>Entrar</h2>
            <Input icon="email" placeholder={"Senha"} onChange={()=>{}}/>
            <Input icon="lock" placeholder={"Email"} onChange={()=>{}} />
            <a href="#">Esqueci minha senha</a>
        </div>
        </main>
        
        </>
    )
}

export default Hello