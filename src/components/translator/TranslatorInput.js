/** @format */

import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../contants/Colors";

const TranslatorInput = ({ handleTranslate }) => {
  const [input, setInput] = useState("");

  const handleSubmitInpput = () => {
    handleTranslate(input);
    setInput("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          onChangeText={(text) => setInput(text)}
          placeholder="Enter Text"
          style={styles.input}
          value={input}
          textAlignVertical="top"
          onSubmitEditing={handleSubmitInpput}
        />
        <Ionicons
          name="arrow-forward-circle"
          size={30}
          color={Colors.secondary}
          style={styles.arrowIcon}
          onPress={handleSubmitInpput}
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
