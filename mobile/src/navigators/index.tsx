import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import PublicNavigator from './Public.navigator'
    
export interface IPageProps {
    navigation : any
}


const AppNavigator : React.FC = () => {
    return (
        <NavigationContainer>
            { /* show public routes only if not authenticated */ }
            <PublicNavigator />


        </NavigationContainer>
    )
}

export default AppNavigator


