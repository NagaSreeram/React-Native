import { Image, Text } from "react-native";
import { HeaderStyle } from "../StyleSheets/HeaderJSS.style";

export function Header() {
  return (
    <>
      <Image
        style={HeaderStyle.image}
        source={require("../assets/icon.png")}
        resizeMode="contain"
      />
      <Text style={HeaderStyle.subText}>You probably have something to do</Text>
    </>
  );
}
