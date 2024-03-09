/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AddNoteContext from "./AddNoteContext";

import { addNote } from "../../store/Reducers";
import { useDispatch } from "react-redux";

const AddNoteLayout = () => {
  const dispatch = useDispatch(); // Get dispatch function

  const handleSaveNote = (title, note) => {
    const newNote = { title: title, content: note };
    console.log("new note ", newNote);
    dispatch(addNote(newNote)); // Dispatch the addNote action
  };

  return (
    <View style={{ flex: 1 }}>
      <AddNoteContext saveNote={handleSaveNote} />
    </View>
  );
};

export default AddNoteLayout;

const styles = StyleSheet.create({});
