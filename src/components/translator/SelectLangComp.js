/** @format */

import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { Pressable } from "react-native";
import SupportedLanguges from "../../utils/SupportedLanguges";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useTranslateContext } from "../../store/SelectLangContext";

const SelectLangComp = ({ selectMode, current }) => {
  const navigation = useNavigation();
  const { setTranslateFrom, setTranslateTo } = useTranslateContext();

  const onLangPress = (langKey) => {
    selectedLang = SupportedLanguges[langKey];
    if (selectMode === "to") {
      setTranslateTo(selectedLang);
    }
    if (selectMode === "from") {
      setTranslateFrom(selectedLang);
    }

    navigation.navigate("TranslateScreen");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: selectMode === "to" ? "Translate To" : "Translate From ",
    });
  }, []);

  const SelectLangItem = ({ item }) => {
    const itemText = SupportedLanguges[item];
    isChecked = itemText === current;

    return (
      <Pressable
        onPress={() => onLangPress(item)}
        style={({ pressed }) => [
          pressed && styles.pressed,
          styles.itemContainer,
        ]}
      >
        <Ionicons
          name={isChecked ? "checkbox-sharp" : ""}
          size={24}
          color="black"
        />

        <Text style={styles.text}>{itemText}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
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
    padding: 2,
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 5,
  },
  pressed: {
    opacity: 0.5,
  },
});
