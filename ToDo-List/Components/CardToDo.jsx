import { Image, Text, TouchableOpacity } from "react-native";
import { CardToDoStyle } from "../StyleSheets/CardToDoJSS.style";
import checkPng from "../../ToDo-List/assets/check.png";

export function CardForToDo({ todo, onPress, onLongPress }) {
  return (
    <TouchableOpacity
      onLongPress={() => onLongPress(todo)}
      style={[CardToDoStyle.card, CardToDoStyle.shadow]}
      onPress={() => onPress(todo)}
    >
      <Text
        style={[
          CardToDoStyle.cardTitle,
          todo.isCompleted && { textDecorationLine: "line-through" },
        ]}
      >
        {todo.title}
      </Text>
      {todo.isCompleted && (
        <Image style={CardToDoStyle.cardImage} source={checkPng} />
      )}
    </TouchableOpacity>
  );
}
