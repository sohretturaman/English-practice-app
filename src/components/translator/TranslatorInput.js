/** @format */

import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../contants/Colors";

const TranslatorInput = () => {
  const [input, setInput] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          onChangeText={(text) => console.log("text in iput", text)}
          placeholder="Enter Text"
          style={styles.input}
          textAlignVertical="top"
          onSubmitEditing={() => console.log("submitted")}
        />
        <Ionicons
          name="arrow-forward-circle"
          size={30}
          color={Colors.secondary}
          style={styles.arrowIcon}
        />
      </View>
      <View style={styles.resultWrapper}>
        <Text>Tranalated Text displays here.. </Text>
      </View>
    </View>
  );
};

export default TranslatorInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
  },
  input: {
    width: "90%",
    height: "100%",
    padding: 5,
  },

  inputWrapper: {
    height: 150,
    padding: 0,
    flexWrap: "wrap",
    flexDirection: "row",
    width: "100%",
    borderBottomColor: Colors.darkGray,
    borderBottomWidth: 1,
  },

  resultWrapper: {
    height: 150,
    padding: 5,
    paddingTop: 10,
  },
  arrowIcon: {
    alignSelf: "flex-end",
    marginBottom: 10,
  },
});
