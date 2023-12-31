/** @format */

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Colors from "../../contants/Colors";
import { Avatar } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../store/Reducers";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CustomDrawer = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    AsyncStorage.getItem("savedTheme").then((value) => {
      setDarkMode(JSON.parse(value));
    });
  }),
    [];

  const dispatch = useDispatch();

  const toggleSwitch = (val) => {
    setDarkMode((prev) => !prev);
    dispatch(changeTheme(val));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={require("../../contants/img/planeTravel.jpg")}
          style={styles.image}
        />
      </View>
      <View style={styles.titleWrapper}>
        <Avatar.Image
          size={50}
          source={{ uri: "https://i.pravatar.cc/300" }}
          style={styles.avatar}
        />
        <Text style={styles.titleText}>Meryem Şöhret </Text>
      </View>
      <View
        style={{
          borderBottomColor: "white",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.switchWrapper}>
        <Text style={styles.switchText}>Dark Theme</Text>
        <Switch
          trackColor={{ false: "#767577", true: Colors.lightGray }}
          thumbColor={darkMode ? Colors.lightBlue : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={darkMode}
          style={styles.switch}
        />
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  titleWrapper: {
    paddingTop: 10,
    padding: 5,
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "row",
    height: 70,
  },
  titleText: {
    fontSize: 22,
    color: Colors.lightGray,
    fontWeight: "500",
    marginRight: 10,
    padding: 10,
  },
  image: { width: "100%", height: 150, opacity: 0.8 },
  imageWrapper: {
    height: 150,
    padding: 0,
  },
  switchWrapper: {
    padding: 5,
    justifyContent: "space-around",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  switch: { transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] },
  switchText: { color: Colors.lightGray, fontSize: 16, fontWeight: "500" },
});
