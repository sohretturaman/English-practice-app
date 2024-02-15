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
import React from "react";
import { useSelector } from "react-redux";
import Colors from "../contants/Colors";

import Translator from "../components/translator/Translator";
import { useRoute } from "@react-navigation/native";

const TranslateScreen = () => {
  const darkMode = useSelector((selector) => selector.theme.isDarkTheme);
  const route = useRoute();

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: darkMode ? Colors.black : Colors.background },
      ]}
    >
      <Translator
        selectedLang={route.params?.selectedLang}
        mode={route.params?.mode}
      />
    </SafeAreaView>
  );
};

export default TranslateScreen;

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});
