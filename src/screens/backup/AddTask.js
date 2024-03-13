/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomHeader from "../../components/notes/CustomHeader";
import AddTaskLayout from "../../components/tasks/AddTaskLayout";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../contants/Colors";

const AddTask = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <CustomHeader
        header={"Add Task"}
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
      <AddTaskLayout />
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({});
