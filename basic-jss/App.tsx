import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Profile } from './components/profile/profile';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { s } from './app.style';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text style={s.title}>Hello ! Text wrapped in SafeAreaProvider and SafeAreaView</Text>
        <Profile/>
        <View style={s.square}>
          <Text style={s.fontForSquare}>This is a blue square</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
