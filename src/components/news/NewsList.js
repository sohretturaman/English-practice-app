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
import { GetNewsHeadlines } from "../../utils/NewsHttp";

import Title from "./Title";
import NewsItem from "./NewsItem";

const NewsList = () => {
  const [headLineData, setHeadLineData] = useState([]);
  useEffect(() => {
    const getLatestNews = async () => {
      const result = await GetNewsHeadlines();
      setHeadLineData(result.data.articles);
    };

    getLatestNews();
  }, []);
  return (
    <View style={styles.container}>
      <Title>News</Title>
      <FlatList
        nestedScrollEnabled={true}
        scrollEnabled={false}
        data={headLineData}
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
