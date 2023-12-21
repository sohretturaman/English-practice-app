/** @format */

import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";

const ModalAddTask = ({ isVisible, onAddTask, onCancel, onBackdropPress }) => {
  const [taskVal, setTaskVal] = useState("");
  const handleTaskChange = (val) => {
    setTaskVal(val);
  };

  const addTaskHandler = () => {
    onAddTask(taskVal);
    setTaskVal("");
  };
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      onBackdropPress={onBackdropPress}
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add Task"
          mode="outlined"
          style={styles.textInput}
          value={taskVal}
          onChangeText={handleTaskChange}
          autoCapitalize="none"
          autoFocus
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addTaskHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalAddTask;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 0.5,
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    backgroundColor: "white",
    borderRadius: 10,
  },
  textInput: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
    borderRadius: 6,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
