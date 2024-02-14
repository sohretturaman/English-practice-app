/** @format */

import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../contants/Colors";

const HistoryComp = () => {
  //render tranlated words here after got the  tranlated items objects's list
  return (
    <View style={styles.container}>
      <Text>History</Text>
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
