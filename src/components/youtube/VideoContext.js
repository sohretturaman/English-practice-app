/** @format */

import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import Colors from "../../contants/Colors";
import { Icon } from "react-native-elements";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";

const VideoContext = ({ data }) => {
  const [isPressed, setIsPressed] = useState(false);

  console.log("sdescrition", data.snippet.description);

  const toggleDescription = () => {
    setIsPressed(!isPressed);
  };

  return (
    <View style={styles.bottomWrapper}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={styles.bottomTextWrapper}>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
            {data.snippet.title}
          </Text>
          <Text style={styles.subtitle}>{data.snippet.channelTitle}</Text>
        </View>
        <View>
          <AntDesign name="like1" size={20} color="red" />
        </View>
      </View>

      <View style={styles.descWrapper}>
        <Text style={styles.descTitle}>Description</Text>
        {isPressed && (
          <MaterialIcons
            name="cancel"
            color={Colors.darkGray}
            onPress={toggleDescription}
            size={20}
          />
        )}
      </View>

      <Text numberOfLines={isPressed ? 10 : 2} style={styles.description}>
        {data.snippet.description}
      </Text>

      {!isPressed && (
        <Pressable style={styles.button} onPress={toggleDescription}>
          <Text style={styles.buttonText}>Read More</Text>
          <Ionicons
            name="arrow-down-circle"
            size={20}
            color={Colors.secondary}
            style={styles.cancelIcon}
          />
        </Pressable>
      )}
    </View>
  );
};

export default VideoContext;

const styles = StyleSheet.create({
  bottomWrapper: {
    flexDirection: "column",
    paddingHorizontal: 10,
    paddingVertical: 5,
    padding: 2,
  },
  bottomTextWrapper: {
    marginHorizontal: 0,
    flexDirection: "column",
  },
  title: {
    fontSize: 16,
  },
  subtitle: {
    fontSize: 12,
    color: Colors.secondary,
    marginVertical: 5,
  },
  description: {
    fontSize: 14,
  },
  descTitle: {
    alignSelf: "flex-start",
    color: Colors.black,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 10,
  },
  descWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    alignItems: "center",
    width: "100%",
    paddingRight: 10,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: Colors.secondary,
    fontWeight: "500",
    marginRight: 5,
  },
  cancelIcon: {
    marginRight: 10,
  },
});
