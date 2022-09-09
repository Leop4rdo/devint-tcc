import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import HomePage from "../pages/Home";
import LandingPage from "../pages/Landing";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";



const PublicNavigator : React.FC = () => {
    const PublicStack = createNativeStackNavigator()
    
    return (
        <PublicStack.Navigator screenOptions={{ headerShown : false, animation : 'fade_from_bottom' }} initialRouteName="landing">
            <PublicStack.Screen name="landing" component={LandingPage}/>
            <PublicStack.Screen name='login' component={LoginPage}/>
            <PublicStack.Screen name='register' component={RegisterPage} />
        </PublicStack.Navigator>
    );
}

export default PublicNavigator;
