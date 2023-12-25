/** @format */

import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Colors from "../../contants/Colors";

const ButtonComp = ({ onPress, buttonTitle, iconName, style }) => {
  return (
    <Pressable onPress={onPress} style={[styles.buttonWrapper, style]}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.text}>{buttonTitle}</Text>
        <MaterialIcons name={iconName} size={20} color={Colors.primaryDark} />
      </View>
    </Pressable>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  buttonWrapper: {
    backgroundColor: Colors.textLight,
    flex: 1,
    padding: 2,
    borderRadius: 10,
    width: 100,
    height: 80,
    alignSelf: "center",
    marginTop: 10,
    alignItems: "center",
    margin: 2,
  },
  text: {
    color: Colors.primaryDark,
    fontWeight: "bold",
    alignSelf: "center",
    paddingHorizontal: 5,
  },
});
