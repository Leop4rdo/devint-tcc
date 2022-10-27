import React, { useContext } from "react";

import Icon from "components/shared/Icon";
import { AuthContext } from "store/context/Auth.context";
import Button from "components/shared/Button";
import { useNavigate } from "react-router-dom";


interface ISidebarProps {
    open : boolean
}

const Sidebar: React.FC<ISidebarProps> = ({open }) => {
    const authContext = useContext(AuthContext)

    const navigation = useNavigate()

    return (
            <div className={`container-side-bar effect-side-bar ${open ? 'open' : ''}`}>

                <div className="container-user">
                    <div className="container-image-face" onClick={() => navigation('user-profile')}>
                    <img src={authContext?.userData?.profilePicUrl} alt="User profile picture" />
                    </div>
                    <h2 onClick={() => navigation('user-profile')}>{authContext?.userData?.name}</h2>
                    
                </div>

                <div className="horizontal-line">
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

