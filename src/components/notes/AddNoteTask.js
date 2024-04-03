/** @format */

import React, { useState, useRef, useLayoutEffect, useCallback } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Dimensions,
  Text,
} from "react-native";
import {  MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../contants/Colors";

import NoteTaskItem from "./NoteTaskItem";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { editNote,completeNoteTask, deleteNote } from "../../store/NotesSlice";

const winWidth = Dimensions.get("window").width;
const winHeight = Dimensions.get("window").height;

const AddNoteTask = ({ noteId,tasks,setTasks,noteObject,setNoteObject }) => {
const allNotes = useSelector((state) => state?.notes?.notes);
const noteToEdit = allNotes?.find((note) => note?.id === noteId);




  const [task, setTask] = useState(noteToEdit?.tasks || []);


  const dispatch = useDispatch();


  const addTask = () => {
    if (task.task.trim().length !== 0) {
      const newTask = {
        id: nanoid(),
        task: task.task,
        isDone: false,
      };
      const newTasksList = [...tasks, newTask];
      setTasks(newTasksList);
      setNoteObject((prev) => ({ ...prev, tasks: newTasksList }));
     
      if(noteToEdit?.id){
        dispatch(editNote({ id: noteToEdit?.id, newNote: newNote }));
      }
     
      
      setTask("");
    }
  };

  const deleteTask = (taskId) => {
    if(!taskId){
      console.log('first save the task to delete', taskId)
      return;
    }
    setTasks((tasks) => tasks.filter((task) => task.id !== taskId));
    const newNoteObject={ ...noteObject, tasks: tasks.filter((task) => task.id !== taskId) }
    setNoteObject(newNoteObject);
    if(noteToEdit?.id){
      dispatch(editNote({ id: noteToEdit?.id, newNote: newNoteObject }));
    }
 

  };
  const Separator = () => <View style={styles.itemSeparator} />;

  const handleCompleteNoteTask = (taskId) => {
    if(!taskId){
      console.log("first save the task please, (handle compelte)", taskId);
      return;
    }
    setTasks((tasks)=>(
      tasks.map((task)=>{
        if(task.id ===taskId){
          return {...task, isDone:!task.isDone}
        }
        else{
          return;
        }
      })
    ))
    

    dispatch(completeNoteTask({ noteId: noteToEdit.id, taskId: taskId }));
  };
  return (
    <View style={styles.container}>
      <View style={styles.tasksContainer}>
        <Text style={styles.taskTitle}> Tasks List</Text>
        {tasks.map((task, index) => (
          <View key={index}>
            <NoteTaskItem
              itemData={task}
              key={index}
              onDelete={deleteTask}
              onCompleteNoteTask={handleCompleteNoteTask}
              noteId={noteToEdit?.id}
            />
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

    
    </View>
  );
};

export default AddNoteTask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginLeft: winWidth * 0.02,
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

  titleWrapper: {
    width: winWidth * 0.9,
    flexDirection: "row",
    height: winWidth * 0.1,
    justifyContent: "space-between",
  },
});
