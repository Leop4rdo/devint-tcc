import React, { useContext } from "react";

import Icon from "components/shared/Icon";
import { AuthContext } from "store/context/Auth.context";
import Button from "components/shared/Button";


interface ISidebarProps {
    open : boolean
}

const Sidebar: React.FC<ISidebarProps> = ({open}) => {
    const authContext = useContext(AuthContext)

    return (
            // <div className="container-side-bar effect-side-bar ">
            <div className={`container-side-bar effect-side-bar ${open ? 'open' : ''}`}>

                <div className="container-user">
                    <div className="container-image-face">
                    <img src={authContext?.userData?.profilePicUrl} alt="User profile picture" />
                    </div>
                    <h2>{authContext?.userData?.name}</h2>
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

                    <div className="logout-area" onClick={authContext?.signOut}>
                        <span>:q</span>
                        <span>sair</span>
                    </div>

                </div>

            </div>


        


    )
}

export default Sidebar

