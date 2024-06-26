/** @format */

import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../contants/Colors";
import { useNavigation } from "@react-navigation/native";
import MenuComp from "./MenuComp";

function CustomHeader({ header, iconName, MenuComp, onIconPress ,onBackPress}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
          onPress={onBackPress}
        style={({ pressed }) => [styles.backButton, pressed && styles.pressed]}
      >
        <MaterialCommunityIcons
          name={"step-backward"}
          size={26}
          color={"white"}
          onPress={onBackPress}
        />
      </Pressable>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{header}</Text>
      </View>
      <Pressable
        style={({ pressed }) => [styles.iconWrapper, pressed && styles.pressed]}
      >
        <MaterialCommunityIcons
          name={iconName}
          size={25}
          color={"white"}
          style={{ marginRight: 1 }}
          onPress={onIconPress}
        />
      </Pressable>
      <Pressable
        style={({ pressed }) => [styles.iconWrapper, pressed && styles.pressed]}
      >
        {MenuComp}
      </Pressable>
    </View>
  );
}

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: Colors.secondary,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignItems: "flex-end",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  textWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.white,
  },
  pressed: {
    opacity: 0.5,
    backgroundColor: Colors.lightGray,
  },
  iconWrapper: {
    padding: 1,
    marginLeft: 10,
  },
  backButton: {
    paddingHorizontal: 10,
  },
});
