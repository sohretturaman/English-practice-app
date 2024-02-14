/** @format */

import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import SupportedLanguges from "../../utils/SupportedLanguges";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const SelectLangComp = ({ selectMode, current }) => {
  const navigation = useNavigation();

  const onLangPress = (langKey) => {
    selectedLang = SupportedLanguges[langKey];
    navigation.navigate("TranslateScreen", {
      selectedLang: selectedLang,
      langKey: langKey,
      mode: selectMode,
    });
  };

  const SelectLangItem = ({ item }) => {
    const itemText = SupportedLanguges[item];
    isChecked = itemText === current;

    return (
      <Pressable onPress={() => onLangPress(item)}>
        <Ionicons name="checkmark" color={"black"} />
        <Text>{itemText}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <Text>AvailableLanguages</Text>
      <FlatList
        data={Object.keys(SupportedLanguges)}
        renderItem={SelectLangItem}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default SelectLangComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
