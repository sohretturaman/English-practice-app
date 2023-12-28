/** @format */

// NewsScreen.js
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, VirtualizedList } from "react-native";
import NewsList from "../components/news/NewsList";
import SearchBar from "../components/uı/SearchBar";
import Axios from "axios"; // Import Axios correctly
import CategoryList from "../components/news/CategoryList";
import HeadlineList from "../components/news/HeadlineList";
import Colors from "../contants/Colors";
import { ScrollView } from "react-native-gesture-handler";

const fakeNewsData = [
  {
    id: 1,
    title: "Breaking News 1",
    description: "This is a breaking news article.",
    image: "https://via.placeholder.com/300",
  },
  // Add more fake news data...
];

const NewsScreen = ({ navigation }) => {
  const [newsData, setNewsData] = useState(fakeNewsData);
  const [searchedNews, setSearchedNews] = useState([]);

  const handleNewsPress = (news) => {
    navigation.navigate("NewsDetails", { id: news.id });
  };

  const handleSearchSubmit = (searchTerm) => {
    const filteredNews = fakeNewsData.filter((news) =>
      news.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchedNews(filteredNews);
  };

  return (
    <ScrollView showVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <SearchBar onSubmit={handleSearchSubmit} />
        <CategoryList />
        <HeadlineList />

        <NewsList />
      </View>
    </ScrollView>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
