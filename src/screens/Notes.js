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
import { Button, FAB } from "react-native-paper";
import ModalAddTask from "../components/ModalAddTask";
import RenderItem from "../components/RenderItem";
import DATA from "../utils/DummyData";
import { SafeAreaView } from "react-native";
import { useSelector } from "react-redux";

const Notes = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const darkMode = useSelector((selector) => selector.theme.isDarkTheme);
  console.log("dark mode in note", darkMode);
  const onAddTaskHandler = (val) => {
    console.log("input:", val);
    setModalIsVisible(false);
  };

  const onCancelHandler = () => {
    setModalIsVisible(false);
  };
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: darkMode ? "black" : "white" }}
    >
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
    </SafeAreaView>
  );
};

export default Notes;

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
