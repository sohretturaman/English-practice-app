/** @format */

import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../contants/Colors";

const ButtonComp = ({ onPress, buttonTitle, iconName, style, textColor }) => {
  return (
    <Pressable onPress={onPress} style={[styles.buttonWrapper, style]}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={[styles.text, { color: textColor }]}>{buttonTitle}</Text>
        <MaterialCommunityIcons
          name={iconName}
          size={20}
          color={Colors.black}
        />
      </View>
    </Pressable>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  buttonWrapper: {
    backgroundColor: Colors.black,
    flex: 1,
    padding: 8,
    borderRadius: 10,
    width: 100,
    height: 80,
    alignSelf: "center",
    marginTop: 10,
    alignItems: "center",
    margin: 2,
    alignItems: "center",
    textAlignVertical: "center",
  },
  text: {
    color: Colors.white,
    fontWeight: "bold",
    alignSelf: "center",
    paddingHorizontal: 5,
    alignItems: "center",
  },
});
