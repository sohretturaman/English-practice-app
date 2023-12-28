/** @format */

// NewsDetails.js
import React from "react";
import { Pressable, ScrollView, StyleSheet } from "react-native";
import { View, Text, Image, Button } from "react-native";
import Colors from "../../contants/Colors";
import NewsDetailComp from "../../components/news/NewsDetailComp";

const NewsDetailsScreen = ({ route, navigation }) => {
  const { news } = route.params;

  const handleSave = () => {
    // Implement the logic to save the news (you may use Redux here)
    // For now, you can console.log to see it's working
    console.log("News saved:", news);
  };

  return (
    <ScrollView style={styles.container}>
      <NewsDetailComp news={news} />
    </ScrollView>
  );
};

export default NewsDetailsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
