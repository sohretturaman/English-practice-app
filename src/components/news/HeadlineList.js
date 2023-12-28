/** @format */

import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { GetNewsHeadlines } from "../../utils/NewsHttp";
import { useIsFocused } from "@react-navigation/native";
import HeadlineItem from "./HeadlineItem";
import Colors from "../../contants/Colors";
import Title from "./Title";

const HeadlineList = () => {
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
      <Title>Headlines</Title>
      <FlatList
        nestedScrollEnabled={true}
        //   scrollEnabled={false}
        data={headLineData}
        renderItem={({ item }) => <HeadlineItem item={item} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HeadlineList;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
});
