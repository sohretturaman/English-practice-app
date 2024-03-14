/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomHeader from "../../components/notes/CustomHeader";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../contants/Colors";
import AddTaskForm from "../../components/tasks/AddTaskForm";
import { useRoute } from "@react-navigation/native";

const AddTask = ({ navigation }) => {
  const route = useRoute();

  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <CustomHeader
        header={route.params?.editableTask ? "Edit Task" : "Add Task"}
        MenuComp={() => (
          <Ionicons
            name="checkmark-done"
            size={26}
            color={Colors.white}
            onPress={() => navigation.goBack()}
            style={styles.cancelIcon}
          />
        )}
      />
      <AddTaskForm currentTask={route.params?.editableTask} />
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({});
