import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./StyleSheets/TempConverterJSS.style";
import { ImageBackground, Text, View } from "react-native";
import { Input } from "./Components/Input";
import { useState } from "react";
import { DisplayTemperature } from "./Components/DisplayTemperature";

export default function App() {

const [temperatureDisplay, setTemperatureDisplay] = useState(0);
const [currentUnit, setCurrentUnit] = useState("℃")

  return (
    <ImageBackground source={require('./assets/hot.png')} style={s.backgroundImg}>
    <SafeAreaProvider>
      <SafeAreaView style={s.root}>
        <View style={s.workspace}>
          <DisplayTemperature  unit={currentUnit}  temperature={temperatureDisplay}/>
          <Input  unit={currentUnit}  onChange={setTemperatureDisplay} defaultValue={0}/>
          <Text style={{ fontSize: 16}}>Button</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
    </ImageBackground>
  );
}
