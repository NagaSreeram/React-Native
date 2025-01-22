import { StyleSheet } from "react-native";

export const CardToDoStyle = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  cardTitle: {
    fontSize: 20,
    height: 115,
    paddingBlockStart: 40,
  },
  cardImage: {
    height: 25,
    width: 25,
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: {
      width: -2,
      height: 4,
    },
    shadowOpacity: 50,
    shadowRadius: 30,
    elevation: 10,
  },
});
