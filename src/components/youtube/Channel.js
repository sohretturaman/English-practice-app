/** @format */

import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../contants/Colors";
import { useNavigation } from "@react-navigation/native";

const Channel = ({ data, margin }) => {
  const navigation = useNavigation(); //transition to playlist items screen
  return (
    <Pressable style={[styles.container, { marginHorizontal: margin }]}>
      <Image
        source={{
          uri: `${data}`, // to being able to load all type images
        }}
        style={{
          width: 150,
          height: 100,
          resizeMode: "cover",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <View style={styles.textWrapper}>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.text}>
          channel name is here{" "}
        </Text>
      </View>
    </Pressable>
  );
};

export default Channel;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    width: 150,
    height: 150,
    justifyContent: "space-between",
    borderRadius: 10,
    maxWidth: 200,
    backgroundColor: Colors.darkGray,
    elevation: 5,
    marginBottom: 15,
  },
  textWrapper: {
    padding: 5,
    paddingBottom: 10,
  },

  text: {
    fontSize: 16,
    fontWeight: "400",
    color: Colors.white,
    textAlign: "left",
  },
});
