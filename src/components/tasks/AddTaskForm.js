/** @format */

import {
  TextInput,
  Button,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { Children, useLayoutEffect, useState } from "react";
import { View, StyleSheet, Modal, Text } from "react-native";
import Colors from "../../contants/Colors";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addTask, completeSubtask, editTask } from "../../store/Reducers";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigation } from "@react-navigation/native";

const winWidth = Dimensions.get("window").width;

const AddTaskForm = ({ currentTask }) => {
  const selector = useSelector((state) => state.tasks.tasks);
  const findTask = selector?.find((item) => item.id === currentTask?.id);
  const [task, setTask] = useState(currentTask ? findTask.task : "");
  const [subtask, setSubtask] = useState("");
  const [subTasks, setSubtasks] = useState(
    currentTask ? findTask.subtasks : []
  ); //!!imp
  const [taskObj, setTaskObj] = useState(currentTask ? findTask : {});
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useLayoutEffect(() => {}, [findTask, subTasks]);

  const handleAddTask = () => {
    if (task && currentTask) {
      const updatedTask = {
        ...taskObj,
        task: task,
        subtasks: subTasks,
        date: new Date().toISOString(),
      };
      setTaskObj(updatedTask);
      dispatch(editTask(updatedTask));
    } else {
      const newTask = {
        task: task,
        subtasks: subTasks,
        isDone: false,
        date: new Date().toISOString(),
      };
      setTaskObj(newTask);
      //dispatch(addTask(newTask));
    }
  };

  const addSubtask = () => {
    if (subtask && subtask.trim() !== 0) {
      const newSubtask = {
        id: nanoid(),
        subtask: subtask,
        isDone: false,
      };
      setSubtasks((prev) => [newSubtask, ...prev]);
      const updatedTask = {
        ...taskObj,
        subTasks: subTasks,
      };
      setTaskObj(updatedTask);
      setSubtask("");
    } else {
      return;
    }
  };

  const onSaveTask = () => {
    if (task.trim().length === 0) {
      return;
    }
    if (currentTask) {
      const updatedTask = {
        ...taskObj,
        id: currentTask.id,
        task: task,
        subtasks: subTasks,
        date: new Date().toISOString(),
      };
      console.log("updated task", updatedTask);
      dispatch(editTask(updatedTask));
      navigation.navigate("Tasks");
    } else {
      const newTask = {
        task: task,
        subtasks: subTasks,
        isDone: false,
        date: new Date().toISOString(),
      };
      dispatch(addTask(newTask));
      navigation.navigate("Tasks");
    }
  };

  const onDoneSubtask = (subtaskId) => {
    if (currentTask?.id) {
      dispatch(completeSubtask({ id: currentTask.id, subtaskId }));
      const FilteredSubtasks = subTasks.filter(
        (subtask) => subtask.id !== subtaskId
      )
      setSubtasks(FilteredSubtasks);
    } else {
      console.warn("First save the task");
      return;
    }
  };

  const onDeleteSubtask = (id) => {
    console.log("on Delete subtask", id);
    // dlete subtask function in dispatch function!!
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1, padding: 10, height: winWidth }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.cotainer}>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>Date : 20.03.2024</Text>
            <MaterialCommunityIcons
              name="sticker-check-outline"
              size={26}
              color={Colors.secondary}
              style={styles.save}
              onPress={onSaveTask}
            />
          </View>

          <TextInput
            placeholder="Add a new task.."
            placeholderTextColor={"gray"}
            style={styles.textInput}
            value={task}
            onChangeText={(text) => setTask(text)} // Update the current task
            autoCapitalize="none"
            placeholderTextSize={20}
            onSubmitEditing={handleAddTask}
          />
          <View style={styles.subtaskContainer}>
            <Text style={styles.subtaskTitle}>Subtasks</Text>
            <ScrollView
              style={styles.subtaskList}
              showsVerticalScrollIndicator={true}
            >
              {subTasks.map((subtaskItem, index) => (
                <Pressable
                  key={index}
                  style={({ pressed }) => [
                    styles.subtaskItem,
                    pressed && styles.pressed,
                  ]}
                >
                  <MaterialCommunityIcons
                    name="square-rounded-outline"
                    size={20}
                    color={Colors.darkGray}
                    style={styles.icon}
                    onPress={() => onDoneSubtask(subtaskItem.id)}
                  />

                  {subtaskItem.isDone ? (
                    <Text style={styles.checkedText}>
                      {subtaskItem.subtask}
                    </Text>
                  ) : (
                    <Text numberOfLines={2} style={styles.subtaskText}>
                      {subtaskItem.isDone ? "true" : "false"}{" "}
                      {subtaskItem.subtask}
                    </Text>
                  )}

                  <MaterialCommunityIcons
                    name="cancel"
                    size={20}
                    color={Colors.darkGray}
                    style={styles.icon}
                    onPress={() => onDeleteSubtask(subtaskItem.id)}
                  />
                </Pressable>
              ))}
            </ScrollView>
            <View style={styles.inputWrapper}>
              <MaterialCommunityIcons
                name="square-rounded-outline"
                size={20}
                color={Colors.secondary}
                style={styles.icon}
                onPress={onDoneSubtask}
              />

              <TextInput
                value={subtask}
                onChangeText={(text) => setSubtask(text)}
                placeholder="Add a subtask"
                placeholderTextColor={Colors.darkGray}
                style={styles.subtaskIput}
                onSubmitEditing={addSubtask}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default AddTaskForm;

const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
    height: winWidth,
  },

  textInput: {
    width: "100%",
    padding: 5,
    fontSize: 18,
    borderRadius: 10,
    borderColor: Colors.secondary,
    borderBottomWidth: 1.5,
    borderColor: Colors.darkGray,
    paddingLeft: 10,
    marginTop: winWidth * 0.08,
    height: 50,
  },

  dateContainer: {
    width: winWidth * 0.95,
    height: winWidth * 0.1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: winWidth * 0.02,
    justifyContent: "space-between",
  },
  date: {
    padding: 2,
    fontWeight: "600",
    color: Colors.darkGray,
    fontSize: winWidth * 0.03,
  },
  save: {
    padding: 2,
  },
  subtaskContainer: {
    marginTop: 10,
    padding: 10,
    marginTop: winWidth * 0.04,
    width: winWidth * 0.95,
    alignSelf: "center",
  },
  subtaskTitle: {
    color: Colors.darkGray,
    fontWeight: "bold",
    fontSize: 18,
  },
  inputWrapper: {
    marginTop: winWidth * 0.08,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
    height: winWidth * 0.1,
    borderBottomColor: Colors.darkGray,
    borderBottomWidth: 1,
    paddingHorizontal: 5,
    elevation: 2,
    backgroundColor: Colors.lightGray,
  },
  subtaskIput: {
    flex: 1,
    height: "100%",
    paddingLeft: 10,
  },
  icon: {
    marginHorizontal: 5,
  },
  subtaskList: {
    marginTop: 10,
    height: "auto",
    overflow: "scroll",
    maxHeight: winWidth * 0.6,
  },
  subtaskItem: {
    backgroundColor: "white",
    marginVertical: 5,
    padding: 5,
    borderRadius: 5,
    minHeight: winWidth * 0.1,
    elevation: 2,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  subtaskText: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.darkGray,
    marginLeft: 10,
    padding: 3,
    height: "auto",
  },
  checkedText: {
    fontSize: 16,
    fontWeight: "500",
    textDecorationLine: "line-through",
    color: Colors.checkedText,
  },
  pressed: {
    opacity: 0.5,
  },
});
