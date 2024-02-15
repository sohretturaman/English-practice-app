/** @format */

import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../contants/Colors";

const HistoryComp = ({ data }) => {
  //render tranlated words here after got the  tranlated items objects's list
  console.log("data in history **", data?.length);

  const renderItem = ({ item }) => {
    return (
      <View>
        <Text numberOfLines={4} style={{ fontSize: 16, color: "black" }}>
          {item.original_text}
        </Text>
        <Text>{item.translated_text[item.to]}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text>History</Text>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

export default HistoryComp;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: Colors.lightGray,
    padding: 10,
  },
});
