import { Text } from "react-native";
import { TemperatureStyle } from "../StyleSheets/DisplayTemperatureJSS.style";

export function DisplayTemperature({ temperature, unit }) {
  return (
    <Text style={TemperatureStyle.tempText}>
      {temperature}
      {unit}
    </Text>
  );
}
