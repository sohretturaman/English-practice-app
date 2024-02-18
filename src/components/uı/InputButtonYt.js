/** @format */

import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const InputButtonYt = ({ onPress }) => {
  return (
    <View>
      <Pressable
        style={({ pressed }) => [
          pressed && styles.pressed,
          styles.searchWrapper,
        ]}
        onPress={onPress}
      >
        <Ionicons
          name="search"
          size={24}
          color="gray"
          style={{ marginRight: 5 }}
          onPress={onPress}
        />
        <TextInput
          placeholder="Search..."
          editable={false}
          style={{ width: "90%" }}
        />
      </Pressable>
    </View>
  );
};

export default InputButtonYt;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
  searchWrapper: {
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 16,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    padding: 5,
    marginTop: 10,
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    elevation: 1,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
});
