import React from "react";
import LogoComponent from "components/shared/Logo";
import InputSearch from "components/shared/Input-Search";
import Icon from "components/shared/Icon";
import NavBar from "components/shared/Feed/NavBar"
import Button from "components/shared/Button";



const Sidebar: React.FC = () => {
    return (
        <>
            <div className="a">
                <NavBar/>
            </div>
             <div className="container-sad-bar">
                
                <div className="container-user">
                    <div className="container-image-face">
                       {/*  <img src="public/assets/images/Svg/dev-img" alt="" /> */}
                    </div>
                    <h2>User name</h2>
                </div>

                <div className="container-itens">

                    <nav className="container-nav">
                        <ul>
                            <Icon name="house" /><li><a>Home</a></li>
                        </ul>
                        <ul>
                            <Icon name="article" /><li><a>Artigos</a></li>
                        </ul>
                        <ul>
                            <Icon name="watch_later" /><li><a>Itens salvos</a></li>
                        </ul>
                        <ul>
                            <Icon name="chat" /><li><a>Chats</a></li>
                        </ul>
                        <ul>
                            <Icon name="settings" /><li><a>Configurações</a></li>
                        </ul>
                    </nav>

                    <div className="logout-icon">
                    <Icon name="logout" />
                     </div>  

                </div>

                

            </div> 
        
        
        
        
        
        </>
           

    )
}

export default Sidebar

