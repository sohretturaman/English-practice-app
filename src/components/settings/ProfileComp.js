/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import Colors from "../../contants/Colors";
import { AntDesign } from "@expo/vector-icons";

const ProfileComp = ({ onEditPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileWrapper}>
        <Avatar.Image
          size={100}
          source={{ uri: "https://i.pravatar.cc/300" }}
          style={styles.avatar}
        />
        <View style={styles.iconWrapper}>
          <AntDesign
            name="edit"
            size={24}
            color={Colors.white}
            onPress={onEditPress}
          />
        </View>
      </View>
      <Text style={styles.userName}> Meryem Şöhret Turaman</Text>
    </View>
  );
};

export default ProfileComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profileWrapper: {
    marginBottom: 10,
    flexDirection: "row",
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.darkGray,
  },
  iconWrapper: {
    alignItems: "center",
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: Colors.secondary,
    borderRadius: 50,
    padding: 5,
  },
});
