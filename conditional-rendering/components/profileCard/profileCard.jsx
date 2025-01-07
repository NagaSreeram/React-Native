import { Text, View, Image, TouchableOpacity } from "react-native";
import { s } from "../../StyleSheets/ProfileCardCSS.style";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";

export function ProfileCard({
  firstName,
  lastName,
  children,
  age,
  isOpenToWork,
}) {
  // console.log(props);

  /* This is ternary operator */
  // <Text style={{ fontSize: 29 }}>
  //   {age < 50 ? "You are Youngg" : "You are oldd"}
  // </Text>;

  /** This is basic if-else */
  // if (age < 50) {
  //   return <Text style={{ fontSize: 29 }}>You are young</Text>;
  // } else {
  //   return <Text style={{ fontSize: 29 }}>You are old</Text>;
  // }

  /** This is how we deal with boolean values */
  // return (
  //   <>
  //     <Text style={{ fontSize: 29 }}>
  //       {age < 50 ? "You are young" : "You are old"}
  //     </Text>
  //     {isHappy && <Text style={{ fontSize: 29 }}>I am Happy</Text>}
  //   </>
  // );

  return (
    <View style={[s.shadowProp, s.container]}>
      <View style={[s.header]}>
        <View>
          <Image
            style={s.avatar}
            source={{ uri: "https://i.pravatar.cc/300" }}
          />
        </View>
        <View style={s.text}>
          {/* <Text style={s.name}>Naga Sreeram</Text> */}
          {/* <Text style={s.name}>{props.firstName} {props.lastName +"!"}</Text> */}

          <Text style={s.name}>
            {children} {firstName} {lastName}
          </Text>
          <Text>
            I'm a React Native Developer, I have over {age} of experience as
            developer. I also have profiency in Java
          </Text>
          {isOpenToWork ? (
            <Text style={{ backgroundColor: "green", color: "white" }}>
              I'm looking for job
            </Text>
          ) : (
            <Text style={{ backgroundColor: "green", color: "white" }}>
              I'm not looking for job
            </Text>
          )}
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
