/** @format */

import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../contants/Colors";
import { useSelector } from "react-redux";

const PracticesScreen = () => {
  const darkMode = useSelector((selector) => selector.theme.isDarkTheme);

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: darkMode ? Colors.black : Colors.background },
      ]}
    >
      <Text>PracticesScreen</Text>
    </SafeAreaView>
  );
};

export default PracticesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
