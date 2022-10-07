import React, {useState} from "react";
import SideBar from "components/shared/Feed/Sidebar"
import NavBar from "../NavBar"


const MenuWapper : React.FC = () => {

    

   

    return (
        <div className="container-global">
        <NavBar />
        
        <div className="effect-side-bar">
            <SideBar/>  
        </div>  
        
        <main>

        </main>
        </div>
    )
}

export default MenuWapper