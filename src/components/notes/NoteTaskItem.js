/** @format */
import { StyleSheet, Text, View, Pressable, Dimensions } from "react-native";
import React, { useDebugValue, useRef, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../contants/Colors";
import { useNavigation } from "@react-navigation/native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";


const windWidth = Dimensions.get("window").width;
const NoteTaskItem = ({ itemData, onDelete, onCompleteNoteTask }) => {
  const swipeableRef = useRef(null);
console.log('item data in noteTAskItem', itemData)
  


  function onCompPress(taskId) {   
    if(taskId) {
      onCompleteNoteTask(taskId);
    }
    if(!taskId) {
      console.log("first save the task please, (in noteTaskItem)", taskId);
      return;
    }
    
  }

  const handleEdit = () => {
    console.log("pressed on edit"); // convert text into input
  };
  const handlecheckedEdit = () => {
    return;
  };
  /*   const rightSwipeActions = () => {

    return (
      <View
        style={{
          backgroundColor: '#ff8303',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
      >
        <Text
          style={{
            color: '#1b1a17',
            paddingHorizontal: 10,
            fontWeight: '600',
            paddingHorizontal: 30,
            paddingVertical: 20,
          }}
        >
          Delete
        </Text>
      </View>
    );
  }; */

  const LeftSwipeActions = () => {
    return (
      <View style={styles.leftSwipeContainer}>
        <Text
          style={{
            color: "#FFFFFF",
            paddingHorizontal: 0,
            fontWeight: "600",
            paddingHorizontal: windWidth * 0.05,
          }}
        >
          Delete Task
        </Text>
      </View>
    );
  };

  const swipeFromLeftOpen = (itemId) => {
    if (!itemId) {
      console.log("First save the task please, (in noteTaskItem)", itemId);
      return;
    }
  
    console.log('Delete task ID in swipeFromLeftOpen in noteTaskItem', itemId);
    onDelete(itemId);
  
    if (swipeableRef.current !== null) {
      swipeableRef.current.close();
    }
  };
  

  return (
    <GestureHandlerRootView style={styles.swipeItemContainer}>
      <Swipeable
        ref={swipeableRef} // Set the ref for Swipeable
        renderLeftActions={LeftSwipeActions}
        onSwipeableLeftOpen={() => swipeFromLeftOpen(itemData?.id)}
      >
        <View style={styles.itemWrapper}>
          <MaterialCommunityIcons
            name={itemData.isDone ? "square-rounded" : "square-rounded-outline"}
            size={25}
            childre
            color={itemData.isDone ? Colors.checkedText : Colors.darkGray}
            style={styles.icon}
            onPress={() => onCompPress(itemData?.id)}
          
          />

          <Pressable
            style={({ pressed }) => [
              styles.textWrapper,
              pressed && styles.pressed,
            ]}
            onPress={itemData.isDone ? handlecheckedEdit : handleEdit}
          >
            {itemData.isDone ? (
              <Text style={styles.checkedText}>{itemData.task}</Text>
            ) : (
              <View style={styles.textWrapper}>
                <Text style={styles.taskText}>{itemData.task}</Text>
              </View>
            )}
          </Pressable>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default NoteTaskItem;

const styles = StyleSheet.create({
  swipeItemContainer: {
    flex: 1,
    height: windWidth * 0.12,
    backgroundColor: Colors.background,
    width: windWidth * 0.9,
    alignSelf: "center",
    borderRadius: 10,
  },
  itemWrapper: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    backgroundColor: Colors.white,
    borderRadius: 10,
    height: windWidth * 0.12,
    justifyContent: "center",
  },
  icon: {
    marginHorizontal: 8,
  },
  checkedText: {
    fontSize: 16,
    fontWeight: "500",
    textDecorationLine: "line-through",
    color: Colors.checkedText,
  },
  taskText: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.darkGray,
  },
  textWrapper: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    paddingLeft: 5,
    backgroundColor: Colors.white,
  },
  subtaskWrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: -windWidth * 0.02,
    marginTop: windWidth * 0.01,
  },
  subtaskText: {
    fontSize: 12,
    color: Colors.secondary,
    fontWeight: "500",
  },
  shareIcon: {
    marginRight: windWidth * 0.02,
  },
  pressed: {
    opacity: 0.5,
  },
  leftSwipeContainer: {
    flex: 1,
    backgroundColor: Colors.red,
    justifyContent: "center",
    height: windWidth * 0.12,
    borderRadius: 10,
  },
});
