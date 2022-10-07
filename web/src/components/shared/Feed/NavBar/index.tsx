import React, { useState } from "react";
import LogoComponent from "components/shared/Logo";
import InputSearch from "components/shared/Input-Search";
import Icon from "components/shared/Icon";

interface INavBarProps{
    onClick?: any 
}


const NavBar: React.FC<INavBarProps> = ({onClick}) => {

    

    

    return (
        <div className="container-nav-bar" onClick={onClick}>

            <header>
                <div className="menu-toggle">
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                </div>
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
    )
}

export default NavBar

