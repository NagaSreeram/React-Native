import { Text, TouchableOpacity } from "react-native";
import { AddButtonStyle } from "../StyleSheets/AddButtonJSS.style";

export function AddButtonForToDo({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={AddButtonStyle.button}>
      <Text style={AddButtonStyle.buttonText}>+ New ToDo</Text>
    </TouchableOpacity>
  );
}
