import React, { ReactElement, useState } from "react"
import { View } from "react-native"
import NavBar from "../Nav"
import Sidebar from "../Sidebar"

interface ILayoutWrapperProps {
    navigation : any,
    children : ReactElement[] | ReactElement
}

const LayoutWrapper : React.FC<ILayoutWrapperProps> = ({ navigation, children }) => {
    const [ isSidebarVisible, setSidebarVisible ] = useState(false)

    return (
        <View style={{width : '100%', height : '100%'}}>
            <NavBar toggleSidebar={() => setSidebarVisible(!isSidebarVisible)} />
            { children }
            <Sidebar visible={isSidebarVisible} onClose={() => setSidebarVisible(!isSidebarVisible)}/>
        </View>
    )
}

export default LayoutWrapper;
