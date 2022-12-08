import React from "react";
import LogoComponent from "components/shared/Logo";

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
                    <img 
                        src="https://firebasestorage.googleapis.com/v0/b/devint-tcc-33eb6.appspot.com/o/assets%2Fimgs%2Flogin.svg?alt=media&token=09016021-c248-4356-839b-8ed4b27f3d71" 
                        className="login-image" 
                    />
                </div>
                <div className="login-wrapper">
                    
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