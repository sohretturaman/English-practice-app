/** @format */
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const TranslatorHeader = ({ selectedLang, translateFrom, translateTo }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() =>
          navigation.navigate("LangugeSelect", {
            mode: "from",
            current: translateFrom,
          })
        }
      >
        <Text style={styles.text}> {translateFrom} </Text>
      </Pressable>
      <Pressable>
        <Ionicons name="swap-horizontal" size={25} />
      </Pressable>
      <Pressable
        onPress={() =>
          navigation.navigate("LangugeSelect", {
            mode: "to",
            current: translateTo,
          })
        }
      >
        <Text style={styles.text}> {translateTo} </Text>
      </Pressable>
    </View>
  );
};

export default TranslatorHeader;

const styles = StyleSheet.create({
  container: {
    width: "100%",

    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 3,
    alignItems: "center",
    padding: 5,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
  },
});
