import React, { useState } from "react";
import SideBar from "components/layout/Sidebar"
import NavBar from "../NavBar/index"



const MenuWapper: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)


    return (
        <div className="container-global">
            <NavBar toggleSidebar={() => setSidebarOpen(!sidebarOpen)}/>

            <SideBar open={sidebarOpen}/>
            <main className="main">
                {children}
            </main>
        </div>
    )
}

export default MenuWapper