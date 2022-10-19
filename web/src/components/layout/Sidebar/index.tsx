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
            <div className={`container-side-bar effect-side-bar ${open ? 'open' : ''}`}>

                <div className="container-user">
                    <div className="container-image-face">
                    <img src={authContext?.userData?.profilePicUrl} alt="User profile picture" />
                    </div>
                    <h2>{authContext?.userData?.name}</h2>
                </div>

                <div className="container-itens">
                    <nav className="container-nav">
                        <div className="sidebar-item active">
                            <Icon name="house" />
                            <a className="item-text">Home</a>
                        </div>
                        <div className="sidebar-item">
                            <Icon name="article" />
                            <a className="item-text">Artigos</a>
                        </div>
                        <div className="sidebar-item">
                            <Icon name="watch_later" />
                            <a className="item-text">Itens salvos</a>
                        </div>
                        <div className="sidebar-item">
                            <Icon name="chat" />
                            <a className="item-text">Chats</a>
                        </div>
                        <div className="sidebar-item">
                            <Icon name="settings" />
                            <a className="item-text">Configurações</a>
                        </div>
                    </nav>

                    <div className="sidebar-item" onClick={authContext?.signOut}>
                        <span className="icon">:q</span>
                        <span className="item-text">sair</span>
                    </div>

                </div>

            </div>


        


    )
}

export default Sidebar

