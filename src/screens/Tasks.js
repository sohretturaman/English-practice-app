/** @format */

import { StyleSheet, View, Text, ScrollView } from "react-native";
import React, { useState } from "react";

import TasksList from "../components/tasks/TasksList";

const Tasks = () => {
  // finish tasks uı , then add,  add note screen
  //add keyboard avoiding view into tasks screen
  return (
    <View style={styles.container}>
      <TasksList />
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
});
