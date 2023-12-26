/** @format */

import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from "react-native";
import React from "react";
import TasksList from "../components/tasks/TasksList";
import { Keyboard } from "react-native";
import AddTime from "../components/tasks/AddTime";
import { useSelector } from "react-redux";
import Colors from "../contants/Colors";

const Tasks = () => {
  const darkMode = useSelector((selector) => selector.theme.isDarkTheme);
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
          <TasksList />
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
