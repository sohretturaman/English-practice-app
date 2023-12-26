/** @format */

import { StyleSheet, View, Pressable, Text } from "react-native";
import React, { useState } from "react";

import { TextInput } from "react-native";
import Colors from "../../contants/Colors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const AddNoteContext = () => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const handleTitleChange = (text) => {
    setTitle(text);
  };

  const handleTitleSubmit = () => {
    // Move focus to the note section
    noteInputRef.focus();
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleSection}>
        <TextInput
          style={styles.titleInput}
          placeholder="Write a title"
          placeholderTextColor="gray"
          value={title}
          onChangeText={handleTitleChange}
          onSubmitEditing={handleTitleSubmit}
        />
        <MaterialCommunityIcons
          name="sticker-check-outline"
          size={26}
          color={Colors.secondary}
          style={{ margin: 5, paddingTop: 5, alignSelf: "flex-start" }}
        />
      </View>
      <View>
        <TextInput
          ref={(input) => (noteInputRef = input)}
          style={styles.noteInput}
          multiline
          placeholder="Write your note..."
          textAlignVertical="top"
          value={note}
          onChangeText={(text) => setNote(text)}
          autoFocus={true}
        />
      </View>
    </View>
  );
};

export default AddNoteContext;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleSection: {
    borderBottomWidth: 0.5,
    borderBottomColor: "gray",
    paddingBottom: 8,
    backgroundColor: Colors.white,
    height: 70,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "flex-end",
  },
  titleInput: {
    fontSize: 18,
    color: "black",
  },
  noteInput: {
    fontSize: 16,
    padding: 10,
    height: "95%",
    backgroundColor: Colors.white,
    padding: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    paddingTop: 20,
  },
});
