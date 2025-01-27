import { StatusBar } from 'expo-status-bar';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { AppStyles } from './StyleSheets/AppJSS.style';
import React, { useState } from 'react';
import { Header } from './Components/Header';
import { CardForToDo } from './Components/CardToDo';
import { FooterTab } from './Components/BottomTabMenu';
import { AddButtonForToDo } from './Components/AddButton';
import Dialog from "react-native-dialog";
import uuid from "react-native-uuid"

export default function App() {

const [toDoList, setToDoList] = useState([
  {
    id:"1",
    title:"Declare PPF before 27th Jan",
    isCompleted:false
  },
  {
    id:"2",
    title:"Need to but M2 macbook air",
    isCompleted:false
  },
  {
    id:"3",
    title:"Need to declare proofs for tax",
    isCompleted:false
  },
  {
    id:"4",
    title:"Declare PPF before 27th Jan",
    isCompleted:false
  },
  {
    id:"5",
    title:"Need to but M2 macbook air",
    isCompleted:false
  },
  {
    id:"6",
    title:"Need to declare proofs for tax",
    isCompleted:false
  },
  {
    id:"7",
    title:"Declare PPF before 27th Jan",
    isCompleted:false
  },
  {
    id:"8",
    title:"Need to but M2 macbook air",
    isCompleted:false
  },
  {
    id:"9",
    title:"Need to declare proofs for tax",
    isCompleted:false
  }
]);

const [selectedTabName, setSelectedTabName] = useState("all");

const [showAddDialog, setShowAddDialog] = useState(false);

const[inputTextFromAddDialogBox, setInputFromAddDialogBox] = useState("");

function getFilteredList(){
  switch(selectedTabName){
    case "all":
      return toDoList;
      case "inProgress":
        return toDoList.filter((todo)=> !todo.isCompleted);
        case "done":
          return toDoList.filter((todo)=> todo.isCompleted);
          default:
            return []
  }
}

function deleteToDoTask(todoToDelete: any){
  Alert.alert("DELETE TO-DO","Are you sure ?",[
    {text:"Delete", style:"destructive", onPress:()=>{
      console.log("Delete this todo", todoToDelete)
      setToDoList(toDoList.filter(t => t.id !== todoToDelete.id))
    }},
    {text:"Cancle", style:"cancel"},
  ])
}

function renderToDoList(){
  return getFilteredList().map((todo)=> 
  <View key={todo.id} style={AppStyles.card}>
    <CardForToDo onLongPress={deleteToDoTask} onPress={updateToDO} todo={todo}/>
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

function addToDoViaButton(){
  const newToDo = {
    id:uuid.v4(),
    title: inputTextFromAddDialogBox,
    isCompleted: false,
  };
  setToDoList([...toDoList, newToDo]);
}

function renderAddDialog(){
  return (
    <Dialog.Container visible={showAddDialog} onBackdropPress={() => setShowAddDialog(false)}>
      <Dialog.Title>Add ToDo</Dialog.Title>
      <Dialog.Description>
       Add a task for today 
      </Dialog.Description>
      <Dialog.Input onChangeText={(text)=>setInputFromAddDialogBox(text)} placeholder='Ex: Go to the dentist'/>
      <Dialog.Button label="Cancel" color="grey" onPress={() => setShowAddDialog(false)}/>
      <Dialog.Button label="Save" color="#2F76C5" onPress={addToDoViaButton}/>
    </Dialog.Container>
  );
}

  return (
    <>
    <SafeAreaProvider>
      <SafeAreaView style={AppStyles.root}>
        <View style={AppStyles.header}><Header /></View>
        <View style={AppStyles.body}><ScrollView>{renderToDoList()}</ScrollView></View>
        <AddButtonForToDo onPress={()=>setShowAddDialog(true)}/>
      </SafeAreaView>
    </SafeAreaProvider>
    <View style={AppStyles.footer}><FooterTab toDoList={toDoList} onPress={setSelectedTabName} selectedTabName={selectedTabName}/></View>
    {renderAddDialog()}
    </>
  );
}