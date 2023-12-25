/** @format */
import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../contants/Colors";

const TaskItem = ({ itemData }) => {
  function onDeletePress() {
    console.log("delete button pressed");
  }

  return (
    <Pressable
      style={({ pressed }) => [styles.itemWrapper, pressed && styles.pressed]}
      onPress={onDeletePress}
    >
      <Ionicons
        name={itemData.checked ? "checkbox" : "checkbox-outline"}
        size={25}
        color={"black"}
        style={styles.icon}
      />
      <Text style={styles.title}>{itemData.title}</Text>
    </Pressable>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: Colors.white,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,

    elevation: 1,
  },
  icon: {
    marginRight: 10,
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: Colors.black,
    fontWeight: "500",
  },
});
