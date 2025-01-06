import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  shadowProp: {
    shadowColor: "green",
    shadowOffset: {
      width: -2,
      height: 4,
    },
    shadowOpacity: 50,
    shadowRadius: 100,
    elevation: 20,
  },
  container: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: "white",
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  header: {
    flexDirection: "row",
  },
  social: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    padding: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 5,
  },
  text: {
    flex: 1,
    paddingLeft: 15,
  },
  globalJSS: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  socialButton: {
    borderRadius: "50%",
    padding: 10,
    backgroundColor: "#e6e2e1",
  },
});
