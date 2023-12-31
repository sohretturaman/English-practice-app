/** @format */

import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import axios, { Axios } from "axios";
import { OpenAIError } from "openai";

const ChatGptScreen = () => {
  const apiKey = "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";
  // const apiUrl ="https://api.openai.com/v1/engines/text-davinci-002/completions";
  const apiUrl =
    "https://api.openai.com/v1/engines/gpt-3.5-turbo-1106/completions";
  const [textInput, setTextInput] = useState("");
  const [data, setData] = useState([]);

  const handleSend = async () => {
    /* const prompt = textInput;
    try {
      const response = await axios.post(
        apiUrl,
        {
          prompt: prompt,
          max_tokens: 1024,
          temperature: 0.5,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      const botText = response.data.choices[0].text; // Corrected typo
      setData((prevData) => [
        ...prevData,
        { type: "user", text: textInput },
        { type: "bot", text: botText },
      ]);
      setTextInput("");
    } catch (error) {
      OpenAIError.toString(error);
      console.error("Error sending request:", error);
    } */
  };

  return (
    <View>
      <Text>ChatGptScreen</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.type === "user" ? "Ninza" : "Bot"}</Text>
            <Text>{item.text} data</Text>
          </View>
        )}
      />

      <TextInput
        placeholder="ask something"
        value={textInput}
        onChangeText={(text) => setTextInput(text)}
        style={{ padding: 10, backgroundColor: "gray", margin: 10 }}
      />
      <Pressable
        onPress={handleSend}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "red" : "green",
          width: 80,
          padding: 5,
          alignSelf: "center",
        })}
      >
        <Text>Let's Talk</Text>
      </Pressable>
    </View>
  );
};

export default ChatGptScreen;

const styles = StyleSheet.create({});
// https://api.openai.com/v1/engines/text-davinci-002/completions
