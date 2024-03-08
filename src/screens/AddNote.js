/** @format */

import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../contants/Colors";

import MenuComp from "../components/notes/MenuComp";
import Header from "../components/drawer/Header";
import CustomHeader from "../components/notes/CustomHeader";
import AddNoteContext from "../components/notes/AddNoteContext";
import AddNoteLayout from "../components/notes/AddNoteLayout";

const AddNote = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        header={"Add Note"}
        iconName={"clock-edit-outline"}
        MenuComp={() => <MenuComp />}
      />

      <AddNoteLayout />
    </SafeAreaView>
  );
};

export default AddNote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
