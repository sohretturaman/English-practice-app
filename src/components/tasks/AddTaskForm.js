/** @format */

import { TextInput, Button } from "react-native";
import React, { useState } from "react";
import { View, StyleSheet, Modal, Text } from "react-native";
import Colors from "../../contants/Colors";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Dimensions } from "react-native";

const winWidth = Dimensions.get("window").width;
const dummyData = ["task1", "task2", "task3"];
const AddTaskForm = ({ onAddTask, currentTask, setCurrentTask }) => {
  const [subtask, setSubtask] = useState("");
  const [tasks, setTasks] = useState(dummyData);

  const handleAddTask = () => {
    onAddTask(currentTask); // Call the function to add a task with the current task value
  };

  return (
    <View style={styles.cotainer}>
      <Text style={styles.cancelIcon}>Date : 20.03.2024</Text>
      <TextInput
        placeholder="Add a new task.."
        placeholderTextColor={Colors.darkGray}
        style={styles.textInput}
        value={currentTask}
        onChangeText={(text) => setCurrentTask(text)} // Update the current task
        autoCapitalize="none"
      />
      <View style={styles.subtaskContainer}>
        <Text style={styles.subtaskTitle}>Subtasks</Text>
        <View style={styles.subtaskList}>
          {tasks.map((task, index) => (
            <View>
              <Text>Task</Text>
            </View>
          ))}
        </View>
        <View style={styles.inputWrapper}>
          <MaterialCommunityIcons
            name="checkbox-blank-circle-outline"
            size={20}
            color={Colors.secondary}
            style={styles.icon}
          />
          <TextInput
            value={subtask}
            onChangeText={(text) => setSubtask(text)}
            placeholder="Add a subtask"
            placeholderTextColor={Colors.darkGray}
            style={styles.subtaskIput}
          />
        </View>
      </View>
    </View>
  );
};

export default AddTaskForm;

const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
    padding: 10,
  },

  textInput: {
    marginTop: 16,
    width: "100%",
    padding: 5,
    borderRadius: 10,
    borderColor: Colors.secondary,
    borderBottomWidth: 1.5,
    borderColor: Colors.darkGray,
    paddingLeft: 10,
    //backgroundColor: Colors.secondary,
    marginTop: 50,
    height: 50,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
  },
  cancelIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  subtaskContainer: {
    marginTop: 10,
    padding: 10,
  },
  subtaskTitle: {
    color: Colors.darkGray,
    fontWeight: "bold",
    fontSize: 16,
  },
  inputWrapper: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    borderRadius: 8,
    height: winWidth * 0.1,
    borderBottomColor: Colors.darkGray,
    borderBottomWidth: 0.5,
  },
  subtaskIput: {
    flex: 1,
    height: "100%",
    borderRadius: 8,
  },
  icon: {
    marginRight: 5,
  },
  subtaskList: {
    backgroundColor: "red",
  },
});
