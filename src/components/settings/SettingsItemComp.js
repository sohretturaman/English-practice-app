/** @format */

import { Pressable, StyleSheet, Switch, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../contants/Colors";

const SettingsItemComp = ({ onPress, icon, title, switchItem, secondIcon }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
    >
      <View style={styles.settingItem}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name={icon} size={25} color={Colors.coral} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
        </View>

        {switchItem}
        <MaterialCommunityIcons
          name={secondIcon}
          size={30}
          color={Colors.coral}
          style={styles.iconContainer}
        />
      </View>
    </Pressable>
  );
};

export default SettingsItemComp;

const styles = StyleSheet.create({
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: Colors.white,
    borderRadius: 8,
    elevation: 2, // Adds a shadow on Android
    alignSelf: "center",
  },
  iconContainer: {
    marginRight: 10,
    marginLeft: 5,
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.darkGray,
  },
});
