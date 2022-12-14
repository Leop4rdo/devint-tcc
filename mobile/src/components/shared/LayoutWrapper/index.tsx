import { useIsFocused } from "@react-navigation/native"
import React, { ReactElement, useEffect, useState } from "react"
import { View } from "react-native"
import NavBar from "../Nav"
import Sidebar from "../Sidebar"

interface ILayoutWrapperProps {
    navigation : any,
    focused ?: any
    children : ReactElement[] | ReactElement
    activeSidebarItem : number
}

const LayoutWrapper : React.FC<ILayoutWrapperProps> = ({ navigation, children, focused, activeSidebarItem}) => {
    const [ isSidebarVisible, setSidebarVisible ] = useState(false)

    useEffect(() => setSidebarVisible(false), [focused])

    return (
        <View style={{width : '100%', height : '100%'}}>
            <NavBar toggleSidebar={() => setSidebarVisible(!isSidebarVisible)} />
            { children }
            <Sidebar activeItem={activeSidebarItem} navigation={navigation} visible={isSidebarVisible} onClose={() => setSidebarVisible(!isSidebarVisible)}/>
        </View>
    )
}

export default LayoutWrapper;
