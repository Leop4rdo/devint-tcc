import {useContext, useEffect} from "react"
import { Image, Pressable, Text, View } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import Animated, {useAnimatedStyle, useSharedValue, withDelay, withTiming} from "react-native-reanimated"
import {AuthContext} from "../../../store/context/Auth.context"
import {screenWidth} from "../../../styles/utils"
import SidebarItem from "./Items"
import styles from "./styles"

interface ISidebarProps {
    visible: boolean,
    onClose : () => void
}

const Sidebar : React.FC<ISidebarProps> = ({ visible, onClose }) => {
    const animOffset = useSharedValue(-screenWidth)
    const bgFade = useSharedValue(0)

    const authContext = useContext(AuthContext)

    const animatedStyle = useAnimatedStyle(() => {
        return {
            left : animOffset.value
        }
    }, [])

    const bgAnimatedStyle = useAnimatedStyle(() => {
        return {
            opacity : bgFade.value
        }
    })

    useEffect(() => {
        animOffset.value = withTiming((visible) ? 0 : -screenWidth, {duration: 500})
        // bgFade.value = withDelay(400, withTiming((visible) ? .5 : 0, {duration: 250}))
        bgFade.value = (visible) ? 
                    withDelay(400, withTiming(.4, {duration : 250}))
                : 
                    withTiming(0, {duration : 200}) 
    }, [visible])

    return (
        <Animated.View style={[styles.sidebarBg, animatedStyle]}>
            <View style={styles.sidebar}>
                <View style={styles.topItemContainer}>
                    <View style={styles.profileContainer}>
                        <Image style={styles.profileImage} source={{ uri : 'https://avatars.githubusercontent.com/u/51890537?v=4'}} />
                        <Text style={styles.username}>{authContext?.userData?.name}</Text>
                    </View>

                    <View style={styles.divisor}></View>

                    <SidebarItem active icon="home" name="Home" />
                    <SidebarItem icon="trending-up" name="Em alta" />
                    <SidebarItem icon="article" name="Artigos" />
                    <SidebarItem icon="watch-later" name="Itens salvos" />
                    <SidebarItem icon="chat" name="Chat" />
                    <SidebarItem icon="settings" name="Configurações" />
                </View>

                <Pressable style={styles.exitContainer} onPress={authContext?.signOut}>
                    <Text style={styles.exitIcon}>:q</Text>
                    <Text style={styles.exitText}>sair</Text>
                </Pressable>
            </View>
            <Pressable style={{ width: '20%', height: '100%'}} onPress={onClose}>
                <Animated.View style={[styles.blankSpace, bgAnimatedStyle]} />
            </Pressable>
        </Animated.View>
    )
}

export default Sidebar
