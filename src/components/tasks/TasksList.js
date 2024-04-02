/** @format */

import React, { useState, useRef, useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button, FAB } from "react-native-paper";
import TaskItem from "./TaskItem";
import Colors from "../../contants/Colors";

import AddTaskContent from "./AddTaskForm";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { completeTask, deleteTask } from "../../store/Reducers";

const winWidth = Dimensions.get("window").width;
const winHeight = Dimensions.get("window").height;

const TasksList = ({ tasks }) => {
  const navigation = useNavigation();
  const taskData = useSelector((state) => state?.tasks.tasks);
  const [allTasks,setAllTasks] =useState(taskData||[])
  // console.log('all tasks in tasks list ', allTasks)
  const dispatch = useDispatch();
 

  useLayoutEffect(()=>{
setAllTasks(taskData)
  },[
    allTasks,taskData,setAllTasks
  ])
  const handleOnComplete = (id) => {
   /*  setAllTasks((tasks)=>(
      tasks.map((task)=>{
        if(task.id === id){
          return {...task, isDone: !task.isDone}
        }
        else{
          return;
        }
      })
    )) */
    dispatch(completeTask(id));
    
  };

  const handelDeleteTask= (taskId) => {
    const filteredTasks=  tasks.filter((task) => task.id !== taskId);
    setAllTasks(filteredTasks);
    dispatch(deleteTask(taskId)); 
  }
  // filter task here put completed tasks on bottom!!
  const Separator = () => <View style={styles.itemSeparator} />;
  return (
    <View style={styles.container}>
      <FlatList
        data={taskData}
        renderItem={({ item , index}) => (
          <View key={index}>
          <TaskItem itemData={item} onComplete={handleOnComplete}  onDelete={handelDeleteTask}/>
          <Separator />
         </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.navigate("AddTask")}
        color="white"
        size="medium"
      />
    </View>
  );
};

export default TasksList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 65,
    backgroundColor: Colors.secondary,
  },
  itemWrapper: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "pink",
    margin: 5,
    borderRadius: 10,
  },
  icon: {
    marginRight: 10,
  },
  pressed: {
    opacity: 0.5,
  },
  itemSeparator:{
    backgroundColor: Colors.background,
    height: winHeight * 0.01,
  }
});
