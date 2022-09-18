import React from "react";
import Input from "components/utils/Input";
import Button from "components/utils/Button";
import Icon from "components/utils/Icon";
import LogoComponent from "components/utils/Logo";

interface ILoginWapper {
    children?: React.ReactNode
}

const LoginWapper: React.FC<ILoginWapper> = (props) => {

    return(
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


                    
                        {props.children}
                    
                </div>
            </main>
        </div>
    )

}

export default LoginWapper

{/* <loginPage>
    <LoginWrapper>
        <form>

            
        </form>
    </LoginWrapper>
</loginPage> */}