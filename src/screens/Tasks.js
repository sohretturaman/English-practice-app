/** @format */

import { StyleSheet, View } from "react-native";
import React, { useState } from "react";

import TasksList from "../components/tasks/TasksList";

const Tasks = () => {
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
  },
});
