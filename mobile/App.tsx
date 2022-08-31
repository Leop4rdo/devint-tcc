import React from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { useFonts } from '@expo-google-fonts/poppins';
import RegisterPage from './src/pages/Register';
import { fontsToImport } from './src/styles/typography';

export default function App() {
 

  return (
    <RegisterPage/>

  );
}




