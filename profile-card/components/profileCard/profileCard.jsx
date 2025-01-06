import { Text, View, Image, TouchableOpacity } from "react-native";
import { s } from "../../StyleSheets/ProfileCardCSS.style";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";

export function ProfileCard() {
  return (
    <View style={[s.shadowProp, s.container]}>
      <View style={[s.header]}>
        <View>
          <Image style={s.avatar} source={{ uri: "https://i.pravatar.cc/" }} />
        </View>
        <View style={s.text}>
          <Text style={s.name}>Naga Sreeram</Text>
          <Text>I'm a React Native Developer</Text>
        </View>
      </View>
      <View style={[s.social]}>
        <TouchableOpacity style={s.socialButton}>
          <AntDesign name="twitter" size={24} color="#4ba9d1" />
        </TouchableOpacity>
        <TouchableOpacity style={s.socialButton}>
          <Entypo name="linkedin" size={24} color="#0a66c2" />
        </TouchableOpacity>
        <TouchableOpacity style={s.socialButton}>
          <Feather name="facebook" size={24} color="4ba9d1" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
