/** @format */

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
import React, { useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Button, FAB } from "react-native-paper";
import ModalAddTask from "./ModalAddTask";
import TaskItem from "./TaskItem";
import Colors from "../../contants/Colors";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    checked: true,
  },
  {
    id: "3ac68afc-c605-48d3-a4-fbd91aa97f63",
    title: "Second Item",
    checked: false,
  },
  {
    id: "58694a0f-3da1-471f-bd-145571e29d72",
    title: "Third Item",
    checked: true,
  },
  {
    id: "58694a0f-3da1-471f-96-145571e29d72",
    title: "Third Item",
    checked: true,
  },
  {
    id: "58694a0f-3da1-1f-bd96-145571e29d72",
    title: "Third Item",
    checked: true,
  },
  {
    id: "58694a0f-3da-471f-bd96-145571e29d72",
    title: "Third Item",
    checked: true,
  },
  {
    id: "58694a0f-a1-471f-bd96-145571e29d72",
    title: "Third Item",
    checked: true,
  },
  {
    id: "5694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    checked: true,
  },
  {
    id: "5869a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    checked: true,
  },
  {
    id: "58694a0f-3a1-471f-bd96-145571e29d72",
    title: "Third Item",
    checked: true,
  },
  {
    id: "58694a0f-3da1-471f-b96-145571e29d72",
    title: "Third Item",
    checked: true,
  },
  {
    id: "58694a0f-3da1-471f-bd96-45571e29d72",
    title: "Third Item",
    checked: true,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e2d72",
    title: "Third Item",
    checked: true,
  },
];
const TasksList = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const inputRef = useRef(null);

  const onAddTaskHandler = (val) => {
    console.log("input:", val);
    setModalIsVisible(false);
  };

  const onCancelHandler = () => {
    setModalIsVisible(false);
  };

  const handleButtonClick = () => {
    // Focus the TextInput to open the keyboard
    setModalIsVisible(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <FlatList
              data={DATA}
              renderItem={({ item }) => <TaskItem itemData={item} />}
              keyExtractor={(item) => item.id}
            />
            <ModalAddTask
              isVisible={modalIsVisible}
              onAddTask={onAddTaskHandler}
              onCancel={onCancelHandler}
              onBackdropPress={() => setModalIsVisible(false)}
            />
            <FAB
              icon="plus"
              style={styles.fab}
              onPress={handleButtonClick}
              color="white"
              size="medium"
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
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
