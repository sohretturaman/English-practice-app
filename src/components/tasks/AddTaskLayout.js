/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AddTaskForm from "./AddTaskForm";

const AddTaskLayout = () => {
  return (
    <View style={styles.container}>
      <AddTaskForm />
    </View>
  );
};

export default AddTaskLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
