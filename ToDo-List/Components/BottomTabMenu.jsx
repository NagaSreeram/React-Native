import { Text, TouchableOpacity, View } from "react-native";
import { TabMenuStyle } from "../StyleSheets/BottomTabMenuJSS.style";

export function FooterTab({ selectedTabName, onPress, toDoList }) {
  const getCountByStatus = toDoList.reduce(
    (acc, todo) => {
      todo.isComplete ? acc.done++ : acc.inProgress++;
      return acc;
    },
    {
      all: toDoList.length,
      inProgress: 0,
      done: 0,
    }
  );

  function getTextStyle(tabName) {
    return {
      fontWeight: "bold",
      color: selectedTabName === tabName ? "#2F76E5" : "black",
    };
  }

  return (
    <View style={TabMenuStyle.buttons}>
      <TouchableOpacity onPress={() => onPress("all")}>
        <Text style={getTextStyle("all")}>All ({getCountByStatus.all})</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress("inProgress")}>
        <Text style={getTextStyle("inProgress")}>
          In Progress ({getCountByStatus.inProgress})
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress("done")}>
        <Text style={getTextStyle("done")}>Done ({getCountByStatus.done})</Text>
      </TouchableOpacity>
    </View>
  );
}
