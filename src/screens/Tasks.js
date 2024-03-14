/** @format */

import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import TasksList from "../components/tasks/TasksList";
import { Keyboard } from "react-native";
import AddTime from "../components/tasks/AddTime";
import { useSelector } from "react-redux";
import Colors from "../contants/Colors";

const Tasks = () => {
  const darkMode = useSelector((selector) => selector.theme.isDarkTheme);
  const dummyData = [
    {
      id: 1,
      task: "Task 1",
      date: "10:00",
      isDone: true,
      subtasks: [{ id: 11, task: "subtask 1" }],
    },
    {
      id: 1,
      task: "Task 2",
      date: "11:00",
      isDone: true,
      subtasks: [{ id: 11, task: "subtask 1" }],
    },
    {
      id: 1,
      task: "Task 3",
      date: "12:00",
      isDone: false,
      subtasks: [{ id: 11, task: "subtask 1" }],
    },
  ];
  const [tasks, setTasks] = useState(dummyData);
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: darkMode ? Colors.black : Colors.background },
      ]}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <TasksList tasks={tasks} />
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
});

export default Tasks;
