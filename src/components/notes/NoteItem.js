/** @format */

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Colors from "./../../contants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const NoteItem = ({ item, deleteNote }) => {
  const navigation = useNavigation();
  const editnote = () => {
    navigation.navigate("EditNote", { noteId: item.id });
  };
  return (
    <Pressable
      onPress={editnote}
      style={styles.continer}
      onLongPress={() => {
        console.log("long press");
      }}
    >
      <View style={styles.headerWrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <Pressable style={{ marginRight: 2, padding: 5 }}>
          <MaterialIcons
            name="cancel-presentation"
            size={20}
            color={"#BF360C"}
            onPress={() => deleteNote(item.id)}
          />
        </Pressable>
      </View>
      <View style={styles.bodyWrapper}>
        <View style={styles.discWrapper}>
          <Text style={styles.disc} ellipsizeMode="tail" numberOfLines={2}>
            {item.content}
          </Text>
        </View>
      </View>
      <View style={styles.footerWrapper}>
        <Text style={styles.date}> date : {item.date.slice(0, 10)}</Text>
      </View>
    </Pressable>
  );
};

export default NoteItem;

const styles = StyleSheet.create({
  continer: {
    width: "90%",
    flex: 1,
    height: 120,
    backgroundColor: Colors.white,
    elevation: 1,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    alignSelf: "center",
    padding: 10,
    justifyContent: "space-between",
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    flexDirection: "column",
    flex: 1,
  },
  discWrapper: {
    padding: 2,
  },
  disc: {
    fontSize: 16,
    color: Colors.darkGray,
  },
  title: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
    marginHorizontal: 5,
  },
  date: {
    color: Colors.darkGray,
    alignSelf: "flex-start",
    fontWeight: "500",
  },
  footerWrapper: {},
});
