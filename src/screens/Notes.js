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

const Notes = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);

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
