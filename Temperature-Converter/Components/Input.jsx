import { Text, TextInput, View } from "react-native";
import { InputBar } from "../StyleSheets/InputJSS.style";

export function Input({ defaultValue, onChange, unit }) {
  return (
    <View style={InputBar.root}>
      <TextInput
        style={InputBar.input}
        maxLength={3}
        placeholder="Type you temperature"
        defaultValue={defaultValue.toString()}
        onChangeText={(text) => {
          onChange(text);
        }}
      />
      <Text style={InputBar.unit}>{unit}</Text>
    </View>
  );
}
