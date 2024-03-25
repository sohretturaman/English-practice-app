/** @format */

import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../contants/Colors";

const winWidth = Dimensions.get("window").width;
const winHeight = Dimensions.get("window").height;

const AddNoteContext = ({ saveNote }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const noteInputRef = useRef(null);

  const handleTitleSubmit = () => {
    // Move focus to the note section
    noteInputRef.current.focus();
  };

  const handleSave = () => {
    const newNote = {
      title: title,
      content: note,
      important: false,
      date: new Date().toISOString(),
      tasks: tasks,
    };
    saveNote(newNote);
    setTitle("");
    setNote("");
    setTasks([]);
  };

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Use ScrollView to enable scrolling */}
      <View style={styles.titleSection}>
        <TextInput
          style={styles.titleInput}
          placeholder="Write a title"
          placeholderTextColor="gray"
          value={title}
          onChangeText={(val) => setTitle(val)}
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
      <View style={styles.inputWrapper}>
        <TextInput
          ref={noteInputRef}
          style={styles.noteInput}
          multiline
          placeholder="Write your note..."
          textAlignVertical="top"
          value={note}
          onChangeText={(text) => setNote(text)}
        />
        <View style={{ marginTop: 50 }}>
          <Text style={styles.taskTitle}> Tasks List</Text>
          {tasks.map((task, index) => (
            <Pressable
              style={styles.taskItemWrapper}
              key={index}
              onPress={() => deleteTask(index)}
            >
              <Ionicons name="trash" size={24} color="black" />
              <Text style={styles.taskItem}>{task}</Text>
            </Pressable>
          ))}

          <TextInput
            style={styles.taskInput}
            placeholder="Add a task..."
            value={task}
            onChangeText={(text) => setTask(text)}
            onSubmitEditing={addTask}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default AddNoteContext;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "red",
  },
  titleSection: {
    borderBottomWidth: 0.5,
    paddingBottom: 8,
    backgroundColor: "white",
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
    height: "100%",
    flex: 1,
  },
  inputWrapper: {
    flex: 1,
    backgroundColor: "blue",
    height: "100%",
    position: "relative",
    width: winWidth,
    bottom: 20,
    height: winHeight * 0.85,
  },
  noteInput: {
    fontSize: 16,
    padding: 10,
    backgroundColor: "white",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingTop: 20,
    backgroundColor: "yellow",
    height: winHeight * 0.85,
    position: "absolute",
    bottom: 0,
    width: winWidth,
    top: 0,
  },
  taskInput: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  taskItem: {
    backgroundColor: "lightgray",
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.darkGray,
    marginBottom: 10,
  },
  taskItemWrapper: {
    flexDirection: "row",
    backgroundColor: "red",
  },
});
