import {createNativeStackNavigator} from "@react-navigation/native-stack"
import HomePage from "../pages/private/Home"


const PrivateNavigator : React.FC = () => {
    const PrivateStack = createNativeStackNavigator()


    return (
        <PrivateStack.Navigator screenOptions={{ headerShown : false, animation : 'fade_from_bottom' }} initialRouteName="home">
            <PrivateStack.Screen name="home" component={HomePage} />
        </PrivateStack.Navigator>
    )
}


export default PrivateNavigator