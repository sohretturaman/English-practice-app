/** @format */

import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const YoutubeMiniCard = ({ data }) => {
  return (
    <Pressable
      style={{ justifyContent: "space-between", marginHorizontal: 10 }}
      onPress={() => {
        console.log("p on layout item");
      }}
    >
      <View>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${data.id.videoId}/hqdefault.jpg`, // to being able to load all type images
          }}
          style={{ width: "100%", height: 180 }}
        />
        <Text>{data.snippet.title} </Text>
        <Text>{data.snippet.channelTitle} </Text>
      </View>
    </Pressable>
  );
};

export default YoutubeMiniCard;

const styles = StyleSheet.create({});
