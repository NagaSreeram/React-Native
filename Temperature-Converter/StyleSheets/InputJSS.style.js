import { StyleSheet } from "react-native";

export const InputBar = StyleSheet.create({
  root: {
    alignSelf: "stretch",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingLeft: 25,
  },
  unit: {
    position: "absolute",
    alignSelf: "flex-end",
    paddingRight: 30,
    fontSize: 30,
  },
});
