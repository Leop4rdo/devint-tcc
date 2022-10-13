import React, { useContext } from "react";

import Icon from "components/shared/Icon";
import { AuthContext } from "store/context/Auth.context";



const Sidebar: React.FC = () => {
    const authContext = useContext(AuthContext)

    return (
            <div className="container-side-bar">

                <div className="container-user">
                    <div className="container-image-face">
                    <img src="../assets/images/Tony.jpg" alt="Tony Cauntry" />
                    </div>
                    <h2>{authContext?.signIn.name}</h2>
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


        


    )
}

export default Sidebar

