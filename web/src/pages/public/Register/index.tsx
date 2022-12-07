import Button from "components/shared/Button";
import React from "react";
import Icon from "components/shared/Icon";
import {useNavigate } from "react-router-dom";


const Register: React.FC = () => {
    
    let navigate = useNavigate(); 
    
    return (
        <div className="register-page">

            <main>
                <div className="image-container">

                    <img src="assets/images/svg/register.svg" className="register-image" />
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
                        <div className="register-and-go-back"> 
                        
                            <button className="button-keyboard_backspace btn-primary" onClick={() => navigate("/")} >
                                <Icon name="keyboard_backspace" />
                            </button>
                            
                            <h1>Cadastre-se</h1>

                        </div>

                            <div className="button-container">

                                <Button className="register-button btn-secondary" onClick={() => navigate("company")}>
                                    SOU EMPRESA
                                </Button>
                                
                                <Button className="register-button btn-secondary" onClick={() => navigate("dev")}>
                                    SOU DEV
                                </Button>
                            </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Register