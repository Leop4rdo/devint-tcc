import { useEffect, useRef } from "react"
import { Animated, Easing } from "react-native"



const useAnimation = (
    initialValue : number, 
    targetValue : number, 
    duration ?: number, 
    easing ?: (value : number) => number, 
    delay ?: number) => {
        
    const prop = useRef(new Animated.Value(initialValue)).current

    const _options : Animated.TimingAnimationConfig = {
        toValue : targetValue,
        delay : delay || 0,
        easing : easing || Easing.out(Easing.ease),
        duration : duration || 500,
        useNativeDriver : true
    }

    const start = () => {
        return Animated.timing(
            prop,
            _options
        ).start()
    } 

    return {
        prop,
        start
    }
}


export default useAnimation