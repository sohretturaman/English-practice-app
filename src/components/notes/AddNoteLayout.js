/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AddNoteContext from "./AddNoteContext";

const AddNoteLayout = () => {
  const handleSaveNote = (title, note) => {
    console.log("title note ", title, note);
  };
  return (
    <View style={{ flex: 1 }}>
      <AddNoteContext saveNote={handleSaveNote} />
    </View>
  );
};

export default AddNoteLayout;

const styles = StyleSheet.create({});
