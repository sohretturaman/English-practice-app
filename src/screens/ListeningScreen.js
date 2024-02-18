/** @format */

import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import Colors from "../contants/Colors";
import SearchBar from "../components/uı/SearchBar";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import InputButtonYt from "../components/uı/InputButtonYt";

const ListeningScreen = () => {
  const darkMode = useSelector((selector) => selector.theme.isDarkTheme);
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: darkMode ? Colors.black : Colors.background },
      ]}
    >
      <InputButtonYt onPress={() => navigation.navigate("SearchScreen")} />
      <Text>ListeningScreen</Text>
    </SafeAreaView>
  );
};

export default ListeningScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
