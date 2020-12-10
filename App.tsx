import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

/**
 * Support Safe areas using react-native-safe-area-context
 * https://reactnavigation.org/docs/handling-safe-area/
 * 
 * Statusbar Docs 
 * https://docs.expo.io/versions/latest/sdk/status-bar/
 */

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <StatusBar style={colorScheme === 'light' ? 'dark' : 'light'} translucent={false}/>
        <Navigation colorScheme={colorScheme} />
      </SafeAreaProvider>
    );
  }
}
