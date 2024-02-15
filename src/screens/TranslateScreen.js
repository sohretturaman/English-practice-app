/** @format */

import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Colors from "../contants/Colors";

import Translator from "../components/translator/Translator";
import { useIsFocused, useRoute } from "@react-navigation/native";

const TranslateScreen = () => {
  const darkMode = useSelector((selector) => selector.theme.isDarkTheme);

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: darkMode ? Colors.black : Colors.background },
      ]}
    >
      <Translator />
    </SafeAreaView>
  );
};

export default TranslateScreen;

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});
