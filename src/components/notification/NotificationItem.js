/** @format */

import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../contants/Colors";

const NotificationItem = ({ item }) => {
  //console.log("notification item", item);

  const getIconByType = (type) => {
    switch (type) {
      case "news":
        return "newspaper-variant-outline";
      case "task":
        return "clipboard-check-multiple-outline";
      case "note":
        return "clipboard-text-multiple-outline";
      case "translator":
        return "translate";
      case "book":
        return "book-open-page-variant";
      default:
        return "text";
    }
  };
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        { opacity: pressed ? 0.5 : 1 },
      ]}
    >
      <View style={styles.innerContainer}>
        <View style={styles.iconWrapper}>
          <MaterialCommunityIcons
            name={getIconByType(item.type)}
            size={25}
            color={Colors.secondary}
            style={{ padding: 5 }}
          />
        </View>
        <View style={styles.contextContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.desc}>{item.desc}</Text>
        </View>
      </View>

      <View style={styles.endContainer}>
        <Text style={styles.date}>{item.date}</Text>
        <Entypo
          name="dot-single"
          size={25}
          color={item.checked ? Colors.coral : Colors.darkGray}
          style={styles.dot}
        />
      </View>
    </Pressable>
  );
};

export default NotificationItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
    alignContent: "center",
    flexDirection: "row",
    backgroundColor: Colors.white,
    borderColor: Colors.darkGray,
    borderWidth: 0.5,
    paddingVertical: 16,
  },
  iconWrapper: {
    backgroundColor: Colors.white,
    padding: 5,
    borderRadius: 30,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  endContainer: {
    alignSelf: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.black,
  },
  desc: {
    fontSize: 14,
    color: Colors.darkGray,
  },
  date: {
    fontSize: 12,
    color: Colors.darkGray,
  },
  dot: {
    alignSelf: "flex-end",
  },
});
