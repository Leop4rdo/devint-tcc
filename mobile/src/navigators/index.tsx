import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import AuthProvider from '../store/context/Auth.context'
import PublicNavigator from './Public.navigator'
    
export interface IPageProps {
    navigation : any
}


const AppNavigator : React.FC = () => {
    return (
        <NavigationContainer>
            <AuthProvider>
                { /* show public routes only if not authenticated */ }
                <PublicNavigator />
            </AuthProvider>
        </NavigationContainer>
    )
}

export default AppNavigator


