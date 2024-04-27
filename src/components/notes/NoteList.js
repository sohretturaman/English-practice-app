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
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../../store/NotesSlice";


const NoteList = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const notesData = useSelector((state) => state?.notes);
  console.log("all notes", notesData.notes?.lenghth);

  const handleDelete = (id) => {
    console.log("id in delete note", id);
    dispatch(deleteNote(id));
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <FlatList
            data={notesData.notes}
            renderItem={({ item }) => (
              <NoteItem key={item.id} item={item} deleteNote={handleDelete} />
            )}
            keyExtractor={(item) => item.id}
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
    marginBottom: 70
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
