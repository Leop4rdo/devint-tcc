import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useFonts } from '@expo-google-fonts/poppins';
import { fontsToImport } from './src/styles/typography';

import AppNavigator from './src/navigators';
import { AuthProvider } from './src/store/context/Auth.context';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import colors from './src/styles/colors';

export default function App() {
  let [fontsLoaded] = useFonts(fontsToImport);

  if (!fontsLoaded) return <View><Text>App is loading...</Text></View> // TODO : add splash screen

  return (
    <View style={{ width : '100%', height : '100%', backgroundColor : colors.PRIMARY}}>
      <SafeAreaProvider>
        <AuthProvider>
          <AppNavigator />
        </AuthProvider>
      </SafeAreaProvider>
    </View>
  );
}
