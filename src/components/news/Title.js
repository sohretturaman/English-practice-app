/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../contants/Colors";

const Title = ({ children }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>{children} </Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  headerContainer: {
    padding: 10,
    borderBottomColor: "red",
  },
  header: {
    fontSize: 18,
    color: Colors.coral,
    fontWeight: "500",
  },
});
