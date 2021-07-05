import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import searchReducer from './redux/reducers';
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
const store = createStore(searchReducer);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <StatusBar style={colorScheme === 'light' ? 'dark' : 'light'} translucent={false} />
          <Navigation colorScheme={colorScheme} />
        </Provider>
      </SafeAreaProvider>
    );
  }
}
