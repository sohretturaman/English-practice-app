/** @format */

import { StyleSheet, Text, View } from "react-native";
import React, { useDebugValue, useState } from "react";
import { TextInput } from "react-native";
import Colors from "../../contants/Colors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { editNote } from "../../store/Reducers";

const EditNoteLayout = ({ info }) => {
  console.log("info in editNotelayour", info.id, info.data);
  const dispatch = useDispatch();

  const [note, setNote] = useState({
    title: info.data.title,
    content: info.data.content,
  });

  const handleTitleSubmit = () => {
    noteInputRef.focus();
  };
  const handleSave = () => {
    console.log("presseed on save");
    dispatch(editNote({ id: info.data.id, newNote: note }));
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleSection}>
        <TextInput
          style={styles.titleInput}
          placeholder="Write a title"
          placeholderTextColor="gray"
          value={note.title}
          onChangeText={(val) =>
            setNote((prev) => {
              return {
                ...prev,
                title: val,
              };
            })
          }
          onSubmitEditing={handleTitleSubmit}
          autoFocus={true}
        />
        <MaterialCommunityIcons
          name="sticker-check-outline"
          size={26}
          color={Colors.secondary}
          style={{ margin: 5, paddingTop: 5, alignSelf: "flex-start" }}
          onPress={handleSave}
        />
      </View>
      <View>
        <TextInput
          ref={(input) => (noteInputRef = input)}
          style={styles.noteInput}
          multiline
          placeholder="Write your note..."
          textAlignVertical="top"
          value={note.content}
          onChangeText={(text) =>
            setNote((prevVal) => {
              return {
                ...prevVal,
                content: text,
              };
            })
          }
        />
      </View>
    </View>
  );
};

export default EditNoteLayout;

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
