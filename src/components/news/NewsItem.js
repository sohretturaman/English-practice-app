/** @format */

import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import Colors from "../../contants/Colors";
import { useNavigation } from "@react-navigation/native";

const NewsItem = ({ item }) => {
  //add load state component
  const publishTime = item.publishedAt.slice(0, 10);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.mainWrapper,
          { opacity: pressed ? 0.5 : 1 },
        ]}
        onPress={() => {
          navigation.navigate("NewsDetails", { news: item });
        }}
      >
        <View style={styles.imageWrapper}>
          <Image source={{ uri: item.urlToImage }} style={styles.image} />
        </View>

        <View style={styles.contextWrapper}>
          <Text style={styles.title} numberOfLines={3}>
            {item.title}
          </Text>
          <Text style={styles.desc} numberOfLines={2}>
            {item.description}
          </Text>
          <View style={styles.ItemFooter}>
            <Text style={styles.source}>
              {" "}
              {item?.source ? item.source.name : ""}
            </Text>
            <Text style={styles.publishTime}> {publishTime}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
  },
  mainWrapper: {
    flexDirection: "row",
  },
  container: {
    justifyContent: "center",
    alignItems: "stretch",
    marginVertical: 5,
    backgroundColor: Colors.white,
  },
  title: {
    fontSize: 16,
    fontWeight: "400",
    color: Colors.black,
    marginBottom: 10,
  },
  desc: {
    color: Colors.darkGray,
    fontSize: 12,
    marginBottom: 5,
  },
  contextWrapper: {
    padding: 5,
    paddingBottom: 0,
    flex: 1,
  },
  ItemFooter: {
    flexDirection: "row",
    overflow: "hidden",
    justifyContent: "space-between",
    marginTop: 5,
    padding: 5,
  },
  source: {
    color: Colors.lightBlue,
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 5,
  },
  publishTime: {
    color: Colors.darkGray,
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 5,
  },
});
