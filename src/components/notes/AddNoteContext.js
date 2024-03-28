/** @format */

import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../contants/Colors";
import TaskItem from "../tasks/TaskItem";
import NoteTaskItem from "./NoteTaskItem";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigation } from "@react-navigation/native";

const winWidth = Dimensions.get("window").width;
const winHeight = Dimensions.get("window").height;

const todoList = [
  { id: "1", task: "Learn JavaScript", isDone: true },
  { id: "2", task: "Learn React", isDone: false },
  { id: "3", task: "Learn TypeScript", isDone: true },
];
const AddNoteContext = ({ saveNote,noteToEdit }) => {
  const navigation = useNavigation(); 
  const [title, setTitle] = useState(noteToEdit?.title || "");
  const [note, setNote] = useState(noteToEdit?.content || "");
  const [tasks, setTasks] = useState(todoList);
  const [task, setTask] = useState(noteToEdit?.tasks|| { task: "", isDone: Boolean });
  const [noteObject, setNoteObject] = useState(noteToEdit || {});
  const noteInputRef = useRef(null);

  const handleTitleSubmit = () => {
    noteInputRef.current.focus();
    
  };

  const handleSave = () => {
    console.log("presseed on save with submit in textinput");
    if (note.trim().length === 0) {
      return;
    }// cope with edit note function in reducers and add formik to add note screen 
    // add edit note functionality, 
    // delete and edit task
    //if current note is existing then update it else create a new one
    if(noteToEdit){
      const updatedNote = {
        ...noteObject,
        title: title,
        content: note,
        important: false,
        date: new Date().toISOString(),
        tasks: tasks,
      };
      console.log('updated note in addnote context', updatedNote)
      setNoteObject(updatedNote);
      console.log(' updated note object?', updatedNote)
      saveNote(updatedNote);
      navigation.navigate('Notes')
    }else{
      const newNote = {
        title: title,
        content: note,
        important: false,
        date: new Date().toISOString(),
        tasks: tasks,
      };
      
      setNoteObject(newNote);
      console.log('new note object?', newNote)
      saveNote(newNote);
      navigation.navigate('Notes')
    }
   
    
  
  };

  const addTask = () => {
    //add task check for edit task too
    if (task.task.trim().length !== 0) {
      const newTask = {
        id: nanoid(),
        task: task.task,
        isDone: false,
      };
      const newTasksList = [...tasks, newTask]
      setTasks(newTasksList);
      setNoteObject((prev)=>({...prev,tasks:newTasksList}))
      setTask("");
    }
 
  };

  const deleteTask = (taskId) => {
    console.log("task id in note content", taskId);
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    console.log("tasks after delete", filteredTasks);
    setTasks(filteredTasks);
  };
  const Separator = () => <View style={styles.itemSeparator} />;

  return (
    <ScrollView style={styles.container}>
      {/* Use ScrollView to enable scrolling */}
      <View style={styles.titleSection}>
        <TextInput
          style={styles.titleInput}
          placeholder="Write a title"
          placeholderTextColor="gray"
          value={title}
          onChangeText={(val) => setTitle(val)}
          onSubmitEditing={handleTitleSubmit}
        autoFocus={true}
        />
        <MaterialCommunityIcons
          name="sticker-check-outline"
          size={26}
          color={Colors.secondary}
          style={{ padding: 5 }}
          onPress={handleSave}
        />
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
         ref={noteInputRef}
          style={styles.noteInput}
          multiline
          placeholder="Write your note..."
          textAlignVertical="top"
          value={note}
          onChangeText={(text) => setNote(text)}
          onSubmitEditing={handleSave}
          submit={true}
          
        />
      </View>
      <View style={styles.tasksContainer}>
        <Text style={styles.taskTitle}> Tasks List</Text>
        {tasks.map((task, index) => (
          <View key={index}>
            <NoteTaskItem itemData={task} key={index} onDelete={deleteTask} />
            <Separator />
          </View>
        ))}
        {/* Add task input */}

        <View style={styles.taskInputWrapper}>
          <MaterialCommunityIcons
            name="square-rounded-outline"
            size={22}
            color={Colors.secondary}
            style={styles.icon}
          />

          <TextInput
            value={task.task}
            onChangeText={(text) =>
              setTask((prev) => ({ ...prev, task: text }))
            }
            placeholder="Add a new task..."
            placeholderTextColor={Colors.darkGray}
            style={styles.taskInput}
            onSubmitEditing={addTask}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default AddNoteContext;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  titleSection: {
    borderBottomWidth: 0.5,
    paddingBottom: 8,
    backgroundColor: "white",
    height: winWidth * 0.15,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  titleInput: {
    fontSize: 18,
    color: "black",
    height: "100%",
    flex: 1,
  },
  inputWrapper: {
    flex: 1,
    height: "100%",
    width: winWidth,
    marginBottom: 20,
    minHeight: winHeight * 0.3,
    height: "auto",
  },
  noteInput: {
    fontSize: 16,
    padding: 10,
    backgroundColor: "white",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingTop: 20,
    minHeight: winHeight * 0.3,
    height: "auto",
  },
  taskInput: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  tasksContainer: {
    marginTop: winWidth * 0.05,
    marginBottom: winWidth * 0.1,
  },
  taskItem: {
    backgroundColor: "lightgray",
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.darkGray,
    marginBottom: 10,
  },
  taskInputWrapper: {
    backgroundColor: Colors.lightGray,
    flexDirection: "row",
    height: winWidth * 0.12,
    width: winWidth * 0.95,
    alignSelf: "center",
    borderRadius: 10,
    marginTop: winWidth * 0.02,
    alignItems: "center",
    paddingHorizontal: winWidth * 0.02,
    elevation: 2,
  },
  taskInput: {
    paddingLeft: 10,
    flex: 1,
    height: winWidth * 0.1,
    fontSize: winWidth * 0.035,
  },
  icon: {
    marginHorizontal: 5,
  },
  itemSeparator: {
    backgroundColor: Colors.background,
    height: winHeight * 0.01,
  },
});
