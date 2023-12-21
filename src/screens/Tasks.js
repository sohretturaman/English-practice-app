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
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Button, FAB } from "react-native-paper";
import ModalAddTask from "../components/ModalAddTask";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    checked: true,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    checked: false,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    checked: true,
  },
];
const Tasks = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  function onDeletePress() {
    console.log("delete button pressed");
  }

  const RenderItem = ({ itemData }) => {
    //console.log("item", itemData);

    return (
      <Pressable
        style={({ pressed }) => [styles.itemWrapper, pressed && styles.pressed]}
        onPress={onDeletePress}
      >
        <Ionicons
          name={itemData.checked ? "checkbox" : "checkbox-outline"}
          size={25}
          color="black"
          style={styles.icon}
        />
        <Text style={styles.title}>{itemData.title}</Text>
      </Pressable>
    );
  };

  const onAddTaskHandler = (val) => {
    console.log("input:", val);
    setModalIsVisible(false);
  };

  const onCancelHandler = () => {
    setModalIsVisible(false);
  };
  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Text>Tasks</Text>
            <FlatList
              data={DATA}
              renderItem={({ item }) => <RenderItem itemData={item} />}
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
              onPress={() => setModalIsVisible(true)}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
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
