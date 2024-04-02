/** @format */
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Dimensions,
} from "react-native";
import React, { useRef, useState } from "react";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import Colors from "../../contants/Colors";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";

const windWidth = Dimensions.get("window").width;
const TaskItem = ({ itemData, onComplete, onDelete }) => {
  const swipeableRef = useRef(null);
  function onCompPress() {
    onComplete(itemData?.id);
  }
  const navigation = useNavigation();

  const handleEdit = () => {
    navigation.navigate("AddTask", { editableTask: itemData });
  };
  const handlecheckedEdit = () => {
    return;
  };
  const SubtaskContainer = () => {
    return (
      <View style={styles.subtaskWrapper}>
        <Ionicons
          name="share-social"
          size={13}
          color={Colors.secondary}
          style={styles.shareIcon}
        />
        <Text style={styles.subtaskText}> Subtasks</Text>
      </View>
    );
  };
  const swipeFromLeftOpen = (itemId) => {
    onDelete(itemId);
    
    if (swipeableRef.current !== null) {
      swipeableRef.current.close();
    }
  };
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

  const onDeleteTask =(taskId)=>{
    console.log("on delete task",taskId)
    onDelete(taskId); 
    
  }

  return (
    <GestureHandlerRootView style={styles.swipeItemContainer}>
      <Swipeable
        ref={swipeableRef} // Set the ref for Swipeable
        renderLeftActions={LeftSwipeActions}
        onSwipeableLeftOpen={() => swipeFromLeftOpen(itemData.id)}
      >
        <Pressable
          style={({ pressed }) => [
            styles.itemWrapper,
            pressed && styles.pressed,
          ]}
        >
          <MaterialCommunityIcons
            name={itemData.isDone ? "square-rounded" : "square-rounded-outline"}
            size={25}
            childre
            color={itemData.isDone ? Colors.checkedText : Colors.darkGray}
            style={styles.icon}
            onPress={onCompPress}
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
                {itemData.subtasks?.length > 0 && <SubtaskContainer />}
              </View>
            )}
          </Pressable>
          <MaterialIcons
            name="cancel"
            size={25}
            color={itemData.isDone ? Colors.checkedText : Colors.darkGray}
            style={styles.icon}
            onPress={()=>onDeleteTask(itemData?.id)}
          />
        </Pressable>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  swipeItemContainer: {
    flex: 1,
    height: windWidth * 0.14,
    backgroundColor: Colors.background,
    width: windWidth * 0.9,
    alignSelf: "center",
    borderRadius: 10,
    borderRadius: 10,
  },
  itemWrapper: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    backgroundColor: Colors.white,
    borderRadius: 10,
    elevation: 2,
    height: windWidth * 0.14,
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
  leftSwipeContainer: {
    flex: 1,
    backgroundColor: Colors.red,
    justifyContent: "center",
    height: windWidth * 0.12,
    borderRadius: 10,
  },
});
