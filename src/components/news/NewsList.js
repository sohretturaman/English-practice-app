/** @format */

// NewsList.js
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";

import Title from "./Title";
import NewsItem from "./NewsItem";

const NewsList = ({ newsData }) => {
  return (
    <View style={styles.container}>
      <Title>News</Title>
      <FlatList
        nestedScrollEnabled={true}
        scrollEnabled={false}
        data={newsData}
        renderItem={({ item }) => <NewsItem item={item} />}
      />
    </View>
  );
};

export default NewsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
