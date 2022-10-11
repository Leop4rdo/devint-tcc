import React, { useState } from "react";
import LogoComponent from "components/shared/Logo";
import InputSearch from "components/shared/Input-Search";
import Icon from "components/shared/Icon";
import Sidebar from "../Sidebar/index";

interface INavBarProps {
    onClick?: any
}


const NavBar: React.FC<INavBarProps> = ({ onClick }) => {

    const [sideBar, setSideBar] = useState(true)

    const teste = () => {
        if (sideBar)
            setSideBar(false)
        else
            setSideBar(true)

    }

    return (
        <div className="container-nav-bar" >

            <header>
                <div className="menu-toggle" onClick={teste}>
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
            
            <div className="side-bar-menu">
                {sideBar && (
                    <Sidebar />
                )}

            </div>




        </div>
    )
}

export default NavBar

