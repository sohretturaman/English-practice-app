/** @format */

import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../contants/Colors";
import { useNavigation } from "@react-navigation/native";

export default function Header({ header, navigation }) {
  return (
    <View style={styles.container}>
      <Pressable style={({ pressed }) => pressed && styles.pressed}>
        <Ionicons
          name="menu"
          size={25}
          style={styles.icon}
          color={Colors.white}
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      </Pressable>

      <View style={styles.textWrapper}>
        <Text style={styles.text}>{header}</Text>
      </View>
      <Ionicons
        name="chatbox-ellipses-outline"
        size={24}
        color={Colors.white}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: Colors.secondary,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  textWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.white,
  },
  pressed: {
    opacity: 0.5,
    backgroundColor: Colors.lightGray,
  },
});
