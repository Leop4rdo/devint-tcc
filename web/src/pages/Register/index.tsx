import Button from "components/utils/Button";
import React from "react";
import Icon from "components/utils/Icon";
import { Link, useNavigate } from "react-router-dom";


const Register: React.FC = () => {
    
    let navigate = useNavigate(); 
    
    return (
        <div className="register-page">

            <main>
                <div className="image-container">

                    <img src="../assets/images/Svg/register.svg" className="register-image" />
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

                            <Button className="register-button btn-secondary" onClick={() => navigate("company")}>
                                SOU EMPRESA
                            </Button>
                            
                            <Button className="register-button btn-secondary" onClick={() => navigate("dev")}>
                                SOU DEV
                            </Button>
                    
                        </div>
                        <Button className="button-keyboard_backspace">
                            <Link className="" to='/'>
                                <Icon name="keyboard_backspace" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Register