import { Button } from "@mui/material";
import React from "react";


const Register: React.FC = () => {

    return (
        <div className="register-page">

            <main>
                <div className="image-container">
                
                    <img src="assets/images/register.svg" className="register-image" />
                    <h2>Crie conexões, tenha seu portfólio online e participe de uma comunidade de desenvolvimento incrivel</h2>
                
                </div>

                <div className="register-container">
                    <div className="menu-container">
                        <nav>
                            <ul>
                                <li><a href="#">Sobre Nós</a></li>
                                <li><a href="#">Desenvolvedores</a></li>
                                <li><a href="#">Empresas</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="register-user">
                        <h1>Cadastre-se</h1>
                        <div className="button-container">
                            <Button className="register-button">SOU EMPRESA</Button>
                            <Button className="register-button">SOU DEV</Button>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Register