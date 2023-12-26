/** @format */

import { StyleSheet, Text, View, Modal, Keyboard } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import ButtonComp from "../uı/ButtonComp";
import Colors from "../../contants/Colors";
import { KeyboardAvoidingView } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { Platform } from "react-native";
import PickTimeComp from "./AddTime";

const MyModal = ({ onRequestClose, isOpen, onModalCancel }) => {
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [taskValue, setTaskValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const onTaskReminder = (data) => {
    setIsDatePickerVisible(true);
  };

  const handleTaskChange = (val) => {
    if (val !== "" || val !== null) {
      setTaskValue(val);
    }
  };

  const addTaskHandler = () => {
    console.log("my current tasks  on modal", tasks);
    if (taskValue !== "" || taskValue !== null) {
      setTasks([...tasks, taskValue]); // add the new item into array
    }
    setTaskValue("");
    onModalCancel();
  };

  const handleOnCancel = () => {
    onModalCancel();
    setTaskValue("");
  };
  const handleDatePickerCancel = () => {
    setIsDatePickerVisible(false);
  };

  const handleCalendarConfirm = (dateVal) => {
    setIsDatePickerVisible(false);
    console.log("calendar data in my modal", dateVal);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Modal
          visible={isOpen}
          animationType="slide"
          transparent={true}
          onRequestClose={onRequestClose}
        >
          <View style={styles.modalMainContainer}>
            <View style={styles.modalContextWrapper}>
              <View style={styles.cancelButtonWrapper}>
                <MaterialIcons
                  name="cancel-presentation"
                  size={25}
                  color={Colors.secondary}
                  onPress={handleOnCancel}
                />
              </View>
              <View style={styles.textInputWrapper}>
                <TextInput
                  placeholder="Add a new task.."
                  placeholderTextColor={Colors.darkGray}
                  textColor={Colors.white}
                  style={styles.textInput}
                  value={taskValue}
                  onChangeText={handleTaskChange}
                  autoCapitalize="none"
                  autoFocus={true}
                />
              </View>

              <View style={styles.buttonContainer}>
                <View style={styles.buttonWrapper}>
                  <ButtonComp
                    buttonTitle={"Reminder"}
                    onPress={onTaskReminder}
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

            <PickTimeComp
              isDatePickerVisible={isDatePickerVisible}
              handleCancel={handleDatePickerCancel}
              handleReminderTime={handleCalendarConfirm}
            />
          </View>
        </Modal>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default MyModal;

const styles = StyleSheet.create({
  modalMainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)", //trasnparent
  },
  modalContextWrapper: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    height: 300,
    borderRadius: 10,
    justifyContent: "space-between",
    borderColor: Colors.darkGray,
    borderWidth: 3,
  },
  textInput: {
    marginTop: 16,
    width: "100%",
    padding: 5,
    borderRadius: 10,
    borderColor: Colors.secondary,
    borderBottomWidth: 1,
    paddingLeft: 10,
  },
  buttonContainer: {
    flex: 1,
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonWrapper: {
    width: 100,
    marginHorizontal: 8,
    height: 50,
    marginTop: 20,
    marginHorizontal: 20,
  },
  cancelButtonWrapper: {
    marginRight: 5,
    alignSelf: "flex-end",
  },
  textInputWrapper: {
    flex: 1,
    marginTop: 16,
  },
});
