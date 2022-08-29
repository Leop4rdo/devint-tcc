import React from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { useFonts } from '@expo-google-fonts/poppins';
import LandingPage from './src/pages/Home';
import { fontsToImport } from './src/styles/typography';

export default function App() {
  let [fontsLoaded] = useFonts(fontsToImport);

  if (!fontsLoaded) return <View><Text>App is loading...</Text></View> // TODO : add splash screen

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        
        {/* <HomePage /> */}

    <LandingPage />

      </SafeAreaView>
    </View>
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
