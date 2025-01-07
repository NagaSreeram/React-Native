import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { DisplayAge } from "./DisplayAge";

export function AgeCounter() {
  const [age, setAge] = useState(0);

  function increamentAge() {
    setAge(age + 1);
    console.log(age);
  }

  return (
    <>
      <TouchableOpacity
        onPress={increamentAge}
        style={{ backgroundColor: "#00A2FF" }}
      >
        <Text style={{ fontSize: 40, color: "white" }}>Increase Age</Text>
      </TouchableOpacity>
      <DisplayAge age={age} />
    </>
  );
}
