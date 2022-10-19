import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../pages/private/Home"
import PostRegisterPage from "../pages/private/posts/Register";
import ProfilePage from "../pages/private/DevProfile";


const PrivateNavigator : React.FC = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator initialRouteName="home" screenOptions={{ headerShown : false, animation : 'fade_from_bottom'}}>
            {/* <Stack.Screen name="home" component={HomePage} /> */}
            <Stack.Screen name="post-register" component={PostRegisterPage} />
            <Stack.Screen name="profile" component={ProfilePage}/>
            
   
        </Stack.Navigator>
    )
}


export default PrivateNavigator
