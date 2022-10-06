import React from "react";
import LogoComponent from "components/shared/Logo";
import InputSearch from "components/shared/Input-Search";
import Icon from "components/shared/Icon";


const NavBarSadBar: React.FC = () => {
    return (
        <div className="container-global">
            <div className="container-nav-bar">
                <header>
                    <h1><LogoComponent primary="#1F252F" /></h1>
                    <div className="container-search">
                        <div className="container-input" >
                            <InputSearch icon="search" type="search" placeholder="Pesquisar..." />
                        </div>
                        <div className="container-icon-notifications">
                            <Icon name="notifications" />
                        </div>

                    </div>

                </header>
            </div>

            <div className="container-sad-bar">
                
                <nav>
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
                        <Icon name="settings"/><li><a>Configurações</a></li>
                    </ul>
                </nav>
            </div>

        </div>


    )
}

export default NavBarSadBar

