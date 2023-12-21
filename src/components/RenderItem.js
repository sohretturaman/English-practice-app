/** @format */
import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Button, FAB } from "react-native-paper";

const RenderItem = ({ itemData }) => {
  //console.log("item", itemData);
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
        color="black"
        style={styles.icon}
      />
      <Text style={styles.title}>{itemData.title}</Text>
    </Pressable>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  icon: {
    marginRight: 8,
  },
  title: {
    flex: 1,
  },
});
