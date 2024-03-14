/** @format */

import {
  TextInput,
  Button,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
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

const AddTaskForm = ({ currentTask }) => {
  console.log("current task", currentTask);
  const [task, setTask] = useState(currentTask);
  const [subtask, setSubtask] = useState("");
  const [subTasks, setSubtasks] = useState([]);
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (subTasks.length > 0 && task) {
      const updatedTask = {
        task: task,
        subtasks: subTasks,
      };
      setTasks([...tasks, updatedTask]);
    } else {
      setTasks([...tasks, task]); // Call the function to add a task with the current task value
    }
  };

  const addSubtask = () => {
    if (subtask && subtask.trim() !== 0) {
      setSubtasks((prev) => [...prev, subtask]);
      setSubtask("");
    } else {
      return;
    }

    console.log(
      "subtasks",
      subTasks.map((x) => x)
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1, padding: 10, height: winWidth }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.cotainer}>
          <Text style={styles.cancelIcon}>Date : 20.03.2024</Text>
          <TextInput
            placeholder="Add a new task.."
            placeholderTextColor={Colors.darkGray}
            style={styles.textInput}
            value={task}
            onChangeText={(text) => setTask(text)} // Update the current task
            autoCapitalize="none"
            placeholderTextSize={20}
            onSubmitEditing={handleAddTask}
          />
          <View style={styles.subtaskContainer}>
            <Text style={styles.subtaskTitle}>Subtasks</Text>
            <ScrollView
              style={styles.subtaskList}
              showsVerticalScrollIndicator={true}
            >
              {subTasks.map((task, index) => (
                <Pressable
                  key={index}
                  style={({ pressed }) => [
                    styles.subtaskItem,
                    pressed && styles.pressed,
                  ]}
                >
                  <MaterialCommunityIcons
                    name="checkbox-blank-circle-outline"
                    size={20}
                    color={Colors.darkGray}
                    style={styles.icon}
                  />
                  <Text numberOfLines={2} style={styles.subtaskText}>
                    {task}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
            <View style={styles.inputWrapper}>
              <MaterialCommunityIcons
                name="checkbox-blank-circle-outline"
                size={20}
                color={Colors.darkGray}
                style={styles.icon}
              />
              <TextInput
                value={subtask}
                onChangeText={(text) => setSubtask(text)}
                placeholder="Add a subtask"
                placeholderTextColor={Colors.darkGray}
                style={styles.subtaskIput}
                onSubmitEditing={addSubtask}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default AddTaskForm;

const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
    height: winWidth,
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
    marginTop: winWidth * 0.15,
    height: 50,
  },

  cancelIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  subtaskContainer: {
    marginTop: 10,
    padding: 10,
    marginTop: winWidth * 0.04,
    width: winWidth * 0.95,
    alignSelf: "center",
  },
  subtaskTitle: {
    color: Colors.darkGray,
    fontWeight: "bold",
    fontSize: 18,
  },
  inputWrapper: {
    marginTop: winWidth * 0.08,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
    height: winWidth * 0.1,
    borderBottomColor: Colors.darkGray,
    borderBottomWidth: 1,
    paddingHorizontal: 5,
    elevation: 2,
    backgroundColor: Colors.lightGray,
  },
  subtaskIput: {
    flex: 1,
    height: "100%",
    paddingLeft: 10,
  },
  icon: {
    marginHorizontal: 5,
  },
  subtaskList: {
    marginTop: 10,
    height: "auto",
    overflow: "scroll",
    maxHeight: winWidth * 0.6,
  },
  subtaskItem: {
    backgroundColor: "white",
    marginVertical: 5,
    padding: 5,
    borderRadius: 5,
    minHeight: winWidth * 0.1,
    elevation: 2,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  subtaskText: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.darkGray,
    marginLeft: 10,
    padding: 3,
    height: "auto",
  },
  pressed: {
    opacity: 0.5,
  },
});
