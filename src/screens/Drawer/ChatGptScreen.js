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
 

  const [textInput, setTextInput] = useState("");
  const [data, setData] = useState([]);

  const handleSend = async () => {
   
 console.log('pressed on send ', textInput)
  };

  return (
    <View>
      
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
