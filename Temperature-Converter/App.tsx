import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./StyleSheets/TempConverterJSS.style";
import { ImageBackground, Text, View } from "react-native";
import { InputBar } from "./Components/Input";

export default function App() {
  return (
    <ImageBackground source={require('./assets/hot.png')} style={s.backgroundImg}>
    <SafeAreaProvider>
      <SafeAreaView style={s.root}>
        <View style={s.workspace}>
          <Text style={{ fontSize: 16, marginBottom: 20 }}>Temperature</Text>
          <InputBar/>
          <Text style={{ fontSize: 16}}>Button</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
    </ImageBackground>
  );
}
