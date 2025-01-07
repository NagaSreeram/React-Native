import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { s } from './StyleSheets/App.style';
import { useState } from 'react';

export default function App() {

const [movie, setMovie] = useState("Star Wars")

function updateMovie(){
  setMovie("Titanic")
}
console.log(movie)
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.container}>
<TouchableOpacity onPress={updateMovie}>
  <Text style={{fontSize:40}}>{movie}</Text>
</TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

