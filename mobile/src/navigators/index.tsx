import {NavigationContainer} from '@react-navigation/native'
import React, { useContext } from 'react'
import { AuthContext, AuthProvider } from '../store/context/Auth.context'
import PublicNavigator from './Public.navigator'
    
export interface IPageProps {
    navigation : any
}


const AppNavigator : React.FC = () => {
    const authContext = useContext(AuthContext);

    return (
        <NavigationContainer>
                { authContext?.signed ?
                    <></>
                :
                    <PublicNavigator />}
        </NavigationContainer>
    )
}

export default AppNavigator


