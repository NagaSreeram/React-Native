import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./StyleSheets/TempConverterJSS.style";
import { ImageBackground, Text, View } from "react-native";
import { Input } from "./Components/Input";
import { useState } from "react";
import { DisplayTemperature } from "./Components/DisplayTemperature";
import { convertTemperatureTo, returnOppositUnit } from "./utils/TemperatureConversion";
import { Button } from "./Components/ButtonConvert";

export default function App() {

const [temperatureDisplay, setTemperatureDisplay] = useState(0);
const [currentUnit, setCurrentUnit] = useState("℃")

function checkingForValidTemperatureInput(){
  if(isNaN(temperatureDisplay)){
    return "";
  }else{
    return convertTemperatureTo(temperatureDisplay,returnOppositUnit(currentUnit)).toFixed(1);
  }
}

  return (
    <ImageBackground source={require('./assets/hot.png')} style={s.backgroundImg}>
    <SafeAreaProvider>
      <SafeAreaView style={s.root}>
        <View style={s.workspace}>
          <DisplayTemperature  unit={returnOppositUnit(currentUnit)}  temperature={checkingForValidTemperatureInput()}/>
          <Input  unit={currentUnit}  onChange={setTemperatureDisplay} defaultValue={0}/>
          <Button onPress={() => setCurrentUnit(returnOppositUnit(currentUnit))} unit={currentUnit}/>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
    </ImageBackground>
  );
}
