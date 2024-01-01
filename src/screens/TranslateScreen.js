/** @format */

import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import Colors from "../contants/Colors";
import TranslatorContext from "../components/translator/TranslatorContext";

const TranslateScreen = () => {
  const darkMode = useSelector((selector) => selector.theme.isDarkTheme);

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: darkMode ? Colors.black : Colors.background },
      ]}
    >
      <Text>TranslateScreen</Text>
      <TranslatorContext />
    </SafeAreaView>
  );
};

export default TranslateScreen;

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});
