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

const NoteItem = ({ item, index, handleDelete }) => {
  return (
    <Pressable
      onPress={() => {
        console.log("pressed on note item to edit");
      }}
      style={styles.continer}
      onLongPress={() => {
        console.log("long press");
      }}
    >
      <View style={styles.headerWrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Title item</Text>
        </View>
        <Pressable
          style={{ marginRight: 2, padding: 5 }}
          onPress={() => console.log("onDelete icon")}
        >
          <MaterialIcons
            name="cancel-presentation"
            size={20}
            color={"#BF360C"}
            onPress={() => console.log("onDelete icon")}
          />
        </Pressable>
      </View>
      <View style={styles.bodyWrapper}>
        <View style={styles.discWrapper}>
          <Text style={styles.disc} ellipsizeMode="tail"  numberOfLines={2}>
            {" "}
            Dictiption lorem impus lorem impuslorem impuslorem impuslorem
            impuslorem impuslorem impuslorem impuslorem impus
          </Text>
        </View>
      </View>
      <View style={styles.footerWrapper}>
        <Text style={styles.date}> date : 22.12.2023</Text>
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
