/** @format */

import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const TranslatorInput = () => {
  const [input, setInput] = useState("");

  return (
    <View>
      <TextInput
        onChange={(text) => console.log("text in iput", text)}
        value={input}
        placeholder="Enter Text"
      />
    </View>
  );
};

export default TranslatorInput;

const styles = StyleSheet.create({});
