/** @format */

import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button, FAB } from "react-native-paper";
import TaskItem from "./TaskItem";
import Colors from "../../contants/Colors";

import AddTaskContent from "./AddTaskForm";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { completeTask } from "../../store/Reducers";

const TasksList = ({ tasks }) => {
  const navigation = useNavigation();
  const selector = useSelector((state) => state?.tasks.tasks);
 // console.log('all tasks', selector)
  const dispatch = useDispatch();
 

  const handleOnComplete = (id) => {
    dispatch(completeTask(id));
    
  };
  // filter task here put completed tasks on bottom!!
  return (
    <View style={styles.container}>
      <FlatList
        data={selector}
        renderItem={({ item }) => (
          <TaskItem itemData={item} onComplete={handleOnComplete} />
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
});
