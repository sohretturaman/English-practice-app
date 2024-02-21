/** @format */

import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import Colors from "../contants/Colors";
import { useNavigation, useRoute } from "@react-navigation/native";
import InputButtonYt from "../components/uı/InputButtonYt";
import CardYt from "../components/youtube/CardYt";
import ListeningLayout from "../components/youtube/ListeningLayout";

const ListeningScreen = () => {
  const darkMode = useSelector((selector) => selector.theme.isDarkTheme);
  const route = useRoute();
  console.log("my listening route", route.name);

  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: darkMode ? Colors.black : Colors.background },
      ]}
    >
      <ListeningLayout />
    </SafeAreaView>
  );
};

export default ListeningScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
