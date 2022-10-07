import {NavigationContainer} from '@react-navigation/native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AuthContext, AuthProvider } from '../store/context/Auth.context'
import PrivateNavigator from './Private.navigator'
import PublicNavigator from './Public.navigator'
    
export interface IPageProps {
    navigation : any
}


const AppNavigator : React.FC = () => {
    const authContext = useContext(AuthContext);

    return (
        <NavigationContainer>
            <SafeAreaView style={{ flex : 1 }}>
                { authContext?.signed ?
                    <PrivateNavigator />
                :
                    <PublicNavigator />}
            </SafeAreaView>
        </NavigationContainer>
    )
}

export default AppNavigator


