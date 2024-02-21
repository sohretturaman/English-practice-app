/** @format */

import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../contants/Colors";

const YoutubeMiniCard = ({ data }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={() => {
        console.log("p on layout item");
      }}
    >
      <View style={{ justifyContent: "space-between" }}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${data.id.videoId}/hqdefault.jpg`, // to being able to load all type images
          }}
          style={{
            width: "100%",
            height: 100,
            resizeMode: "cover",
          }}
        />
        <View style={styles.textWrapper}>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
            {data.snippet.title}{" "}
          </Text>
          <Text style={styles.subtitle} numberOfLines={1} ellipsizeMode="tail">
            {data.snippet.channelTitle}{" "}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default YoutubeMiniCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    marginHorizontal: 10,
    width: 200,
    height: 180,
    alignContent: "center",
    justifyContent: "center",
  },
  pressed: {
    opacity: 0.5,
  },

  title: {
    padding: 5,
    fontSize: 15,
    fontWeight: "400",
    color: Colors.black,
  },
  subtitle: {
    paddingLeft: 5,
    color: Colors.darkGray,
    fontSize: 12,
  },
  textWrapper: {
    width: 200,
    paddingVertical: 5,
    padding: 2,

    paddingBottom: 5,
  },
});
