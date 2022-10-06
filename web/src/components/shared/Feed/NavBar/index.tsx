import React from "react";
import LogoComponent from "components/shared/Logo";
import InputSearch from "components/shared/Input-Search";
import Icon from "components/shared/Icon";
import { useState } from "react";

const Feed: React.FC = () => {

    return (
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
    )
}

export default Feed

