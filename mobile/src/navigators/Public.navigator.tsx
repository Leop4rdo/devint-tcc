import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import LoginWrapper from "../pages/public/ForgotMyPassword";
import LandingPage from "../pages/public/Landing";
import LoginPage from "../pages/public/Login";
import RegisterPage from "../pages/public/Register";



const PublicNavigator : React.FC = () => {
    const PublicStack = createNativeStackNavigator()
    
    return (
        <PublicStack.Navigator screenOptions={{ headerShown : false, animation : 'fade_from_bottom' }} initialRouteName="landing">
            <PublicStack.Screen name="landing" component={LandingPage}/>
            <PublicStack.Screen name='login' component={LoginPage}/>
            <PublicStack.Screen name='register' component={RegisterPage} />
            <PublicStack.Screen name='loginwrapper' component={LoginWrapper} />
        </PublicStack.Navigator>
    );
}

export default PublicNavigator;
