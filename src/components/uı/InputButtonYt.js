/** @format */

import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Colors from "../../contants/Colors";

const InputButtonYt = ({ onPress }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Pressable
        style={({ pressed }) => [
          pressed && styles.pressed,
          styles.searchWrapper,
        ]}
        onPress={onPress}
      >
        <Ionicons
          name="search"
          size={18}
          color={Colors.coral}
          style={{ marginRight: 5, marginBottom: -2 }}
        />
        <Text style={{ color: Colors.coral, fontWeight: "500" }}>
          Search more on youtube{" "}
        </Text>

        <FontAwesome
          name="chevron-right"
          size={18}
          color={Colors.coral}
          style={{
            marginHorizontal: 5,
            alignSelf: "center",
            marginBottom: -2,
          }}
          onPress={onPress}
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
    backgroundColor: "transparent",
    flexDirection: "row",
    width: 200,
    alignSelf: "flex-end",
    alignItems: "center",
    padding: 5,
    borderRadius: 10,
    marginTop: 5,
    marginRight: 5,
    justifyContent: "center",
  },
});
