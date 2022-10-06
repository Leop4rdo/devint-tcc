import { createDrawerNavigator } from "@react-navigation/drawer"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../pages/private/Home"


const PrivateNavigator : React.FC = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator initialRouteName="home" screenOptions={{ headerShown : false, animation : 'fade_from_bottom'}}>
            <Stack.Screen name="home" component={HomePage} />
        </Stack.Navigator>
    )
}


export default PrivateNavigator
