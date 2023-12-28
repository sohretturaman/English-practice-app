/** @format */

import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../contants/Colors";

const LoadingComp = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color={Colors.coral} />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export default LoadingComp;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    alignContent: "center",
  },

  text: {
    fontSize: 16,
    color: Colors.coral,
  },
});
