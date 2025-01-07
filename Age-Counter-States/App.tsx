import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { AgeCounter } from './components/AgeCounter/AgeCounter';
import { s } from './StyleSheets/AgeCounterJSS.style';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.GlobalJSS}>
        <AgeCounter/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

