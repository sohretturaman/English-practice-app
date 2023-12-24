/** @format */

import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import Colors from "../contants/Colors";

const BooksScreen = () => {
  const darkMode = useSelector((selector) => selector.theme.isDarkTheme);

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: darkMode ? Colors.black : Colors.background },
      ]}
    >
      <Text>BooksScreen</Text>
    </SafeAreaView>
  );
};

export default BooksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
