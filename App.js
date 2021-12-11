import * as React from 'react';
import { LogBox } from 'react-native';
import RootNavigation from './navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  LogBox.ignoreLogs(['Warning: ...']); //Hide warnings

  LogBox.ignoreAllLogs();
  return (
    <SafeAreaProvider>
      <RootNavigation />
    </SafeAreaProvider>
  );
}
