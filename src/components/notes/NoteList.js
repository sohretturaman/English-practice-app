/** @format */

import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import NoteItem from "./NoteItem";
import { Button, FAB } from "react-native-paper";
import Colors from "../../contants/Colors";
import ModalAddTask from "../ModalAddTask";
import { useNavigation } from "@react-navigation/native";

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

const NoteList = ({ onFabPress }) => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const navigation = useNavigation();
  const onAddTaskHandler = (val) => {
    console.log("input:", val);
    setModalIsVisible(false);
  };

  const onCancelHandler = () => {
    setModalIsVisible(false);
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => <NoteItem item={item} />}
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
            style={[styles.fab, { backgroundColor: Colors.secondary }]}
            onPress={() => navigation.navigate("AddNote")}
            color="white"
            size="medium"
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default NoteList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 65,
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
