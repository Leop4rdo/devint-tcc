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
    onClose : () => void,
    navigation : any,
    activeItem : number
}

const Sidebar : React.FC<ISidebarProps> = ({ visible, onClose, navigation, activeItem }) => {
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
                    <Pressable onPress={() => navigation.navigate('profile', { devId : authContext?.userData.id })} style={styles.profileContainer}>
                        <Image style={styles.profileImage} source={{ uri : authContext?.userData.profilePicUrl}} />
                        <Text style={styles.username}>{authContext?.userData?.name}</Text>
                    </Pressable>

                    <View style={styles.divisor}></View>

                    <SidebarItem active={activeItem == 0} icon="home" name="Home" onPress={() => navigation.push('home')}/>
                    <SidebarItem active={activeItem == 1} icon="trending-up" name="Em alta" onPress={() => navigation.push('home', {feedType : 'trending'})}/>
                    <SidebarItem active={activeItem == 2} icon="watch-later" name="Recentes" onPress={() => navigation.push('home', {feedType : 'newest'})}/>
                    <SidebarItem active={activeItem == 3} icon="article" name="Artigos" />
                    <SidebarItem active={activeItem == 4} icon="chat" name="Chat" />
                    <SidebarItem active={activeItem == 5} icon="settings" name="Configurações" />
                </View>

                <Pressable style={styles.exitContainer} onPress={() => { authContext?.signOut(); } }>
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
