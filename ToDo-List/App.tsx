import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { AppStyles } from './StyleSheets/AppJSS.style';
import React, { useState } from 'react';
import { Header } from './Components/Header';
import { CardForToDo } from './Components/CardToDo';
import { FooterTab } from './Components/BottomTabMenu';

export default function App() {

const [toDoList, setToDoList] = useState([
  {
    id:1,
    title:"Declare PPF before 27th Jan",
    isCompleted:false
  },
  {
    id:2,
    title:"Need to but M2 macbook air",
    isCompleted:false
  },
  {
    id:3,
    title:"Need to declare proofs for tax",
    isCompleted:false
  },
  {
    id:4,
    title:"Declare PPF before 27th Jan",
    isCompleted:false
  },
  {
    id:5,
    title:"Need to but M2 macbook air",
    isCompleted:false
  },
  {
    id:6,
    title:"Need to declare proofs for tax",
    isCompleted:false
  },
  {
    id:7,
    title:"Declare PPF before 27th Jan",
    isCompleted:false
  },
  {
    id:8,
    title:"Need to but M2 macbook air",
    isCompleted:false
  },
  {
    id:9,
    title:"Need to declare proofs for tax",
    isCompleted:false
  }
]);

const [selectedTabName, setSelectedTabName] = useState("all");

function renderToDoList(){
  return toDoList.map((todo)=> 
  <View key={todo.id} style={AppStyles.card}>
    <CardForToDo onPress={updateToDO} todo={todo}/>
  </View>)
}

function updateToDO(todo: any) {
  const updatedTodo = {
    ...todo,
    isCompleted: !todo.isCompleted,
  };

  const updatedToDoList = toDoList.map((t) =>
    t.id === updatedTodo.id ? updatedTodo : t
  );

  setToDoList(updatedToDoList);

}

  return (
    <>
    <SafeAreaProvider>
      <SafeAreaView style={AppStyles.root}>
        <View style={AppStyles.header}><Header /></View>
        <View style={AppStyles.body}><ScrollView>{renderToDoList()}</ScrollView></View>
      </SafeAreaView>
    </SafeAreaProvider>
    <View style={AppStyles.footer}><FooterTab onPress={setSelectedTabName} selectedTabName={selectedTabName}/></View>
    </>
  );
}
