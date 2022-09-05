import React from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View, StatusBar, NativeAppEventEmitter } from 'react-native';
import { useFonts } from '@expo-google-fonts/poppins';
import LandingPage from './src/pages/Landing';
import { fontsToImport } from './src/styles/typography';
import LoginPage from './src/pages/Login';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/pages/Home';

export default function App() {
  let [fontsLoaded] = useFonts(fontsToImport);

  if (!fontsLoaded) return <View><Text>App is loading...</Text></View> // TODO : add splash screen

  const stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='login'screenOptions={{headerShown: false}}>

        <stack.Screen name='login' component={LoginPage}/>
        <stack.Screen name='home' component={HomePage} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    paddingTop: Platform.OS === "ios" ? StatusBar.currentHeight : 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
});
