/** @format */

import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import EditNoteLayout from "../../components/notes/EditNoteLayout";
import CustomHeader from "../../components/notes/CustomHeader";
import MenuComp from "../../components/notes/MenuComp";
import { Ionicons } from "@expo/vector-icons";

const EditNoteScreen = () => {
  const route = useRoute();
  const info = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <CustomHeader header={"Edit Note"} />
      <EditNoteLayout info={info} />
    </SafeAreaView>
  );
};

export default EditNoteScreen;

const styles = StyleSheet.create({});
