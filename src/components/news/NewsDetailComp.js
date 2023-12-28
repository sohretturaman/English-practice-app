/** @format */

import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomHeader from "../notes/CustomHeader";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../contants/Colors";
const NewsDetailComp = ({ news }) => {
  const publishTime = news.publishedAt.slice(0, 10);
  return (
    <View style={styles.container}>
      <CustomHeader
        header={"Read News"}
        iconName={"share"}
        MenuComp={() => (
          <MaterialCommunityIcons name="bookmark" size={25} color="white" />
        )}
      />
      <Image source={{ uri: news.urlToImage }} style={styles.image} />

      <View style={styles.contextWrapper}>
        <View style={styles.headlineWrapper}>
          <Text style={styles.source}>{news.source.name}</Text>
          <Text style={styles.date}>{publishTime}</Text>
        </View>

        <Text style={styles.title}>{news.title}</Text>
        <Text style={styles.desc}>{news.description}</Text>
      </View>

      <Pressable
        onPress={() => {}}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <Text style={styles.readMore}>Read</Text>
      </Pressable>
    </View>
  );
};

export default NewsDetailComp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  contextWrapper: {
    padding: 10,
  },
  headlineWrapper: {
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  source: {
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.primary,
  },
  date: {
    fontSize: 15,
    color: Colors.darkGray,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  desc: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
    color: Colors.darkGray,
  },

  pressed: {
    opacity: 0.5,
  },
  readMore: {
    padding: 10,
    fontSize: 16,
    color: Colors.primary,
  },
});
