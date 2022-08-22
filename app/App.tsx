import React from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { useFonts } from '@expo-google-fonts/poppins';
import fonts from './src/styles/utils/typography';
import HomePage from './src/pages/Home';

export default function App() {
  let [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) return <View><Text>App is loading...</Text></View>

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        
        <HomePage />

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
