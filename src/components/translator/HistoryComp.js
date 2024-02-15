/** @format */

import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../contants/Colors";
import { useTranslateContext } from "../../store/SelectLangContext";

import { Ionicons } from "@expo/vector-icons";

const HistoryComp = ({ data }) => {
  //render tranlated words here after got the  tranlated items objects's list

  const { saveHistory, historyData, saveFaved, favedData } =
    useTranslateContext();

  const handleFavedItems = (item) => {
    saveFaved(item);
  };
  const renderItem = ({ item }) => {
    const isFaved = favedData.some((faved) => faved.id === item.id);

    console.log("is faved", isFaved);

    return (
      <View style={styles.itemContainer}>
        <View>
          <Text numberOfLines={4} style={{ fontSize: 16, color: Colors.black }}>
            {item.original_text}
          </Text>
          <Text style={styles.subtext}>{item.translated_text[item.to]}</Text>
        </View>
        <Pressable
          style={({ pressed }) => pressed && { opacity: 0.5 }}
          onPress={() => handleFavedItems(item)}
        >
          <Ionicons name="star" color={isFaved ? "blue" : "gray"} size={20} />
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>History</Text>
      <FlatList data={historyData.reverse()} renderItem={renderItem} />
    </View>
  );
};

export default HistoryComp;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: Colors.lightGray,
    padding: 10,
    paddingBottom: 70,
  },
  itemContainer: {
    flexDirection: "row",
    margin: 5,
    padding: 5,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 14,
    color: Colors.black,
    marginLeft: 10,
  },
  subtext: {
    color: Colors.darkGray,
  },
});
