/** @format */

import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import Colors from "../../contants/Colors";
import { useNavigation } from "@react-navigation/native";

const searchCard = (props) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("Videoplay", {
          data: props,
        });
      }}
      style={styles.containter}
    >
      <View style={styles.imageWraper}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${props.id.videoId}/default.jpg`,
          }}
          style={{ height: 100, width: "100%", resizeMode: "cover" }}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {props?.snippet.title}
        </Text>
        <Text style={styles.subtext}> {props?.snippet.channelTitle}</Text>
      </View>
    </Pressable>
  );
};

export default searchCard;

const styles = StyleSheet.create({
  containter: {
    flexDirection: "row",
    width: "100%",
    height: 100,
    padding: 5,
    marginVertical: 5,
    backgroundColor: Colors.lightGray,
  },
  textContainer: {
    padding: 5,
    width: "55%",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingBottom: 8,
  },
  imageWraper: {
    width: "44%",
  },
  title: {
    width: "100%",
    lineHeight: 20,
    paddingBottom: 5,
    fontSize: 16,
    color: "black",
  },

  subtext: {
    fontSize: 12,
  },
});
