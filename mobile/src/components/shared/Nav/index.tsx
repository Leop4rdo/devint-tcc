import { MaterialIcons } from "@expo/vector-icons"
import { Pressable, StyleSheet, View } from "react-native"
import Logo from "../Logo"
import styles from "./styles"
import React, { useState } from "react"
import FeedbackTextInput from "../FeedbackInput"

interface INavBarProps {
    toggleSidebar : () => void
}

const NavBar : React.FC<INavBarProps> = ({toggleSidebar}) => {
    // criar state para controlar se o input de pequisa esta visivel
    const [searchVisible, setSearchVisible] = useState(false)
    
    const toggleSearchVisible = () => setSearchVisible(!searchVisible)

    return (
        <View style={styles.navBar}>
            <Pressable style={styles.menuItem} onPress={ toggleSidebar }>
                <MaterialIcons name="menu" size={24} color="#FFF" />
            </Pressable>

            {
                (searchVisible) ?
                    <FeedbackTextInput style={styles.searchInput} onChangeText={() => {}}/>
                :
                    <Logo/>
            }

            <View style={{flexDirection : 'row'}}>
                <Pressable style={styles.menuItem} onPress={toggleSearchVisible}>
                    <MaterialIcons name="search" size={24} color="#FFF" />
                </Pressable>

                <Pressable style={styles.menuItem} >
                    <MaterialIcons name="notifications" size={24} color="#FFF" />
                </Pressable>
            </View>
        </View>
    )
}

export default NavBar