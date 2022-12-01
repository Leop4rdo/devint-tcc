import React, { useState } from "react";
import LogoComponent from "components/shared/Logo";
import Input from "components/shared/Input";
import Icon from "components/shared/Icon";
import Sidebar from "../Sidebar/index";
import { useNavigate } from "react-router-dom";

interface INavBarProps {
    toggleSidebar : () => void
}


const NavBar: React.FC<INavBarProps> = ({ toggleSidebar }) => {
    const navigate = useNavigate()

    return (
        <div className="container-nav-bar" >

            <header>
                <div className="menu-toggle" onClick={toggleSidebar}>
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                </div>
                <h1 onClick={() => { navigate('/feed') }}><LogoComponent primary="#1F252F" /></h1>
                <div className="container-search">
                    
                        <Input icon="search" type="search" placeholder="Pesquisar..." />
                    
                    <div className="container-icon-notifications">
                        <Icon name="notifications" />
                    </div>

                </div>

            </header>
        </div>
    )
}

export default NavBar

