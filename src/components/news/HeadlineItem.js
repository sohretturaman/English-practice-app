/** @format */

import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Colors from "../../contants/Colors";

const HeadlineItem = ({ item }) => {
  const publishTime = item.publishedAt.slice(0, 10);

  return (
    <View style={styles.headlineItemContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.emptyImageContainer,
          { opacity: pressed ? 0.5 : 1 },
        ]}
      >
        <ImageBackground
          source={{ uri: item.urlToImage }}
          style={styles.backImage}
        >
          <View style={styles.contextWrapper}>
            <Text style={styles.title} numberOfLines={3}>
              {" "}
              {item.title}{" "}
            </Text>

            <View style={styles.ItemFooter}>
              <Text style={styles.source} numberOfLines={1}>
                {" "}
                {item.source.name}
              </Text>
              <Text style={styles.publishTime}> {publishTime}</Text>
            </View>
          </View>
        </ImageBackground>
      </Pressable>
    </View>
  );
};

export default HeadlineItem;

const styles = StyleSheet.create({
  headlineItemContainer: {
    margin: 5,
    flex: 1,
  },
  emptyImageContainer: {
    backgroundColor: Colors.darkGray,
    width: 200,
    height: 150,
    elevation: 5,
    flex: 1,
  },
  backImage: {
    height: 150,
    width: 200,
    justifyContent: "flex-end",
    flex: 1,
  },
  ItemFooter: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 1,
    right: -50, //to move to right, check later
    left: 0,
  },
  title: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
  source: {
    color: Colors.lightBlue,
    fontSize: 12,
    fontWeight: "bold",
    flex: 1,
  },
  publishTime: {
    color: Colors.lightGray,
    fontSize: 12,
    fontWeight: "bold",
    flex: 1,
  },
  contextWrapper: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
    alignItems: "stretch",
    flex: 0.6,
  },
});
