import React from "react";
import LogoComponent from "components/layout/Logo";

interface ILoginWapper {
    children?: React.ReactNode
}

const LoginWrapper: React.FC<ILoginWapper> = (props) => {

    return(
        <div className="login-wrapper">
            <header>
                <h1><LogoComponent secondary="#fff" primary="#273140" /></h1>
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
                    
                    {
                        props.children
                    }
                    
                </div>
            </main>
        </div>
    )

}

export default LoginWrapper

{/* <loginPage>
    <LoginWrapper>
        <form>

            
        </form>
    </LoginWrapper>
</loginPage> */}