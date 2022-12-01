import React, { useContext } from "react";

import Icon from "components/shared/Icon";
import { AuthContext } from "store/context/Auth.context";
import Button from "components/shared/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";


interface ISidebarProps {
    open : boolean
}

const Sidebar: React.FC<ISidebarProps> = ({open }) => {
    const authContext = useContext(AuthContext)

    const location = useLocation()

    return (
            <div className={`container-side-bar effect-side-bar ${open ? 'open' : ''}`}>

                <Link className="container-user" to={`/dev/${authContext?.userData?.id}`}>
                    <div className="container-image-face">
                    <img src={authContext?.userData?.profilePicUrl} alt="User profile picture" />
                    </div>
                    <h2>{authContext?.userData?.name}</h2>
                </Link>

                <div className="horizontal-line" />

                <div className="container-itens">
                    <nav className="container-nav">
                        <Link className="sidebar-item" to='/feed' data-status={(location.pathname == '/feed') ? 'active' : 'idle'}>
                            <Icon name="house" />
                            <a className="item-text">Home</a>
                        </Link>
                        <Link className="sidebar-item" to="/feed/latest" data-status={(location.pathname == '/feed/latest') ? 'active' : 'idle'}>
                            <Icon name="watch_later" />
                            <a className="item-text">Recentes</a>
                        </Link>
                        <Link className="sidebar-item" to='/feed/trending' data-status={(location.pathname == '/feed/trending') ? 'active' : 'idle'}>
                            <Icon name="trending_up" />
                            <a className="item-text">Em alta</a>
                        </Link>
                        <Link className="sidebar-item" to='/feed'>
                            <Icon name="article" />
                            <a className="item-text">Artigos</a>
                        </Link>
                        <Link className="sidebar-item" to='/feed'>
                            <Icon name="chat" />
                            <a className="item-text">Chats</a>
                        </Link>
                        <Link className="sidebar-item" to='/feed'>
                            <Icon name="settings" />
                            <a className="item-text">Configurações</a>
                        </Link>
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

