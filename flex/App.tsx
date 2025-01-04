import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import { Text, View } from 'react-native'
import { boxStyles } from './app.style'

export default function App() {

  return (

    <SafeAreaProvider>
      <SafeAreaView style={{flex:1, justifyContent:"space-evenly"}}>
      <View style={boxStyles.box1}/>
      <View style={boxStyles.box2}/>
      <View style={boxStyles.box3}/>
      </SafeAreaView>
    </SafeAreaProvider>

  );

}
