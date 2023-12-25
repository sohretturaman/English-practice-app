/** @format */

import { StyleSheet, View, KeyboardAvoidingView, Platform } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import Colors from "../../contants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import ButtonComp from "../uı/ButtonComp";
import { TextInput } from "react-native-paper";

const ModalAddTask = ({ isVisible, onAddTask, onCancel, onBackdropPress }) => {
  const [taskVal, setTaskVal] = useState("");

  const handleTaskChange = (val) => {
    setTaskVal(val);
  };

  const addTaskHandler = () => {
    onAddTask(taskVal);
    setTaskVal("");
  };
  const handleOnCancel = (taskVal) => {
    onAddTask(taskVal);
    setTaskVal("");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.keyboardAvoidingContainer}
    >
      <Modal
        visible={isVisible}
        animationType="slide"
        onBackdropPress={onBackdropPress}
        style={styles.modalContainer}
      >
        <View style={styles.inputContainer}>
          <View
            style={{
              marginRight: 5,

              alignSelf: "flex-end",
            }}
          >
            <MaterialIcons
              name="cancel-presentation"
              size={25}
              color={Colors.red}
              onPress={handleOnCancel}
            />
          </View>
          <TextInput
            placeholder="Add a new task.."
            placeholderTextColor={Colors.white}
            textColor={Colors.white}
            mode="flat"
            style={[styles.textInput, { backgroundColor: Colors.secondary }]}
            value={taskVal}
            onChangeText={handleTaskChange}
            autoCapitalize="none"
            autoFocus
          />

          <View style={styles.buttonContainer}>
            <View style={styles.buttonWrapper}>
              <ButtonComp
                buttonTitle={"Reminder"}
                onPress={onCancel}
                style={{ backgroundColor: Colors.lightGray }}
                iconName={"clock-edit-outline"}
                textColor={Colors.black}
              />
            </View>
            <View style={styles.buttonWrapper}>
              <ButtonComp
                buttonTitle={"AddTask"}
                onPress={addTaskHandler}
                style={{ backgroundColor: Colors.secondary }}
                textColor={Colors.white}
              />
            </View>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: "center",
    alignContent: "center",
    padding: 10,
    paddingVertical: 20,
    backgroundColor: Colors.white,
    borderRadius: 10,
    height: 100,
  },
  keyboardAvoidingContainer: {},
  inputContainer: {
    marginTop: 10,
    flex: 0.6,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
    borderRadius: 10,
    backgroundColor: Colors.white,
  },
  textInput: {
    marginTop: 16,
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonWrapper: {
    width: 100,
    alignItems: "center",
    marginHorizontal: 8,
    height: 50,
    marginTop: 20,
    marginHorizontal: 20,
  },
});

export default ModalAddTask;
