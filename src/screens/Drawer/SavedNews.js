/** @format */

import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import NewsList from "../../components/news/NewsList";
import { SavedNewsContext } from "../../store/SavedNewsContext";

const SavedNews = () => {
  const newsContext = useContext(SavedNewsContext);
  console.log("context in saved", newsContext.news[0]?.id);
  // const isNewsFaved = newsContext.news.includes(mealId);
  return (
    <View style={styles.container}>
      <NewsList newsData={newsContext.news} />
    </View>
  );
};

export default SavedNews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
