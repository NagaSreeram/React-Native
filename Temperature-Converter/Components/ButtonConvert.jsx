import { Text, TouchableOpacity } from "react-native";
import { ButtonSyle } from "../StyleSheets/ButtonConvertJSS.style";

export function Button({ unit, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={ButtonSyle.button}>
      <Text style={ButtonSyle.buttonText}>Convert to {unit}</Text>
    </TouchableOpacity>
  );
}
