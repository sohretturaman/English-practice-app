/** @format */

import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../contants/Colors";

import MenuComp from "../components/notes/MenuComp";
import Header from "../components/drawer/Header";
import CustomHeader from "../components/notes/CustomHeader";
import AddNoteContext from "../components/notes/AddNoteContext";
import AddNoteLayout from "../components/notes/AddNoteLayout";
import { useRoute } from "@react-navigation/native";

const AddNote = () => {
  const route = useRoute();
  const info = route.params;
  const headerTitle= info?.data ? "Edit Note": "Add Note";

  return (
    <SafeAreaView style={styles.container}>
     

      <AddNoteLayout  info={info}/>
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
