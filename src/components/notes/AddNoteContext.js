/** @format */

import React, { useState, useRef, useLayoutEffect, useCallback } from "react";
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
import TaskItem from "../tasks/TaskItem";
import NoteTaskItem from "./NoteTaskItem";

import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import ImagePicker from "./ImagePicker";
import {  completeNoteTask,  } from "../../store/Reducers";
import { addNote, editNote } from "../../store/NotesSlice";
import AddNoteTask from "./AddNoteTask";

const winWidth = Dimensions.get("window").width;
const winHeight = Dimensions.get("window").height;

const AddNoteContext = ({ noteToEdit }) => {
  // save note here before go to  notes page
  const navigation = useNavigation();
  const [title, setTitle] = useState(noteToEdit?.title || "");
  const [note, setNote] = useState(noteToEdit?.content || "");
  const [tasks, setTasks] = useState(noteToEdit?.tasks || []);
  const [noteObject, setNoteObject] = useState(noteToEdit || {});
  const [images, setImages] = useState(noteToEdit?.images || []);
  const noteInputRef = useRef(null);
  const dispatch = useDispatch();

  const handleTitleSubmit = () => {
    noteInputRef.current.focus();
  };

  const handleSave = () => {
    if (note.trim().length === 0) {
      return;
    }

    if (noteToEdit) {
      const updatedNote = {
        ...noteObject,
        title: title,
        content: note,
        important: false,
        date: new Date().toISOString(),
        tasks: tasks,
        images: images,
      };

      setNoteObject(updatedNote);

      saveNote(updatedNote);
      navigation.navigate("Notes");
    } else {
      const newNote = {
        title: title,
        content: note,
        important: false,
        date: new Date().toISOString(),
        tasks: tasks,
        images: images,
      };
      console.log("is tasks an oobjet", tasks);
      setNoteObject(newNote);

      saveNote(newNote);
      navigation.navigate("Notes");
    }
  };

  const saveNote = (newNote) => {
    dispatch(addNote(newNote));
  };




  const handleSaveImage = useCallback(
    (newImage) => {
      const newImageList = [newImage, ...images];
      setImages(newImageList);
      console.log("images in context", newImageList);
      setNoteObject((prev) => ({ ...prev, images: newImageList }));
    },
    [images, noteObject]
  );


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
          style={{ padding: 5 }}
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
          onSubmitEditing={handleSave}
          submit={true}
        />
      </View>
      <View style={styles.tasksContainer}>
       <AddNoteTask  tasks={tasks} setTasks={setTasks} />
      </View>

      <View style={styles.ImageContainer}>
        <ImagePicker saveImage={handleSaveImage} images={images} />
      </View>
    </ScrollView>
  );
};

export default AddNoteContext;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleSection: {
    borderBottomWidth: 0.5,
    paddingBottom: 8,
    backgroundColor: "white",
    height: winWidth * 0.15,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  titleInput: {
    fontSize: 18,
    color: "black",
    height: "100%",
    flex: 1,
  },
  inputWrapper: {
    flex: 1,
    height: "100%",
    width: winWidth,
    marginBottom: 20,
    minHeight: winHeight * 0.3,
    height: "auto",
  },
  noteInput: {
    fontSize: 16,
    padding: 10,
    backgroundColor: "white",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingTop: 20,
    minHeight: winHeight * 0.3,
    height: "auto",
  },
  taskInput: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  tasksContainer: {
    marginTop: winWidth * 0.05,
    marginBottom: winWidth * 0.1,
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
    marginLeft: winWidth * 0.02,
  },
  taskInputWrapper: {
    backgroundColor: Colors.lightGray,
    flexDirection: "row",
    height: winWidth * 0.12,
    width: winWidth * 0.95,
    alignSelf: "center",
    borderRadius: 10,
    marginTop: winWidth * 0.02,
    alignItems: "center",
    paddingHorizontal: winWidth * 0.02,
    elevation: 2,
  },
  taskInput: {
    paddingLeft: 10,
    flex: 1,
    height: winWidth * 0.1,
    fontSize: winWidth * 0.035,
  },
  icon: {
    marginHorizontal: 5,
  },
  itemSeparator: {
    backgroundColor: Colors.background,
    height: winHeight * 0.01,
  },
  ImageContainer: {
    marginTop: winWidth * 0.05,
    marginBottom: winWidth * 0.1,
    minHeight: winWidth * 0.2,
  },
  titleWrapper: {
    width: winWidth * 0.9,
    flexDirection: "row",
    height: winWidth * 0.1,
    justifyContent: "space-between",
  },
});
