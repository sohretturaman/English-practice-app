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
import { getByCategory } from "../utils/NewsHttp";

const NewsScreen = ({ navigation }) => {
  const [newsData, setNewsData] = useState();
  const [searchedNews, setSearchedNews] = useState([]);

  useEffect(() => {
    getNewsByCategory();
  }, []);

  const handleSearchSubmit = (searchTerm) => {
    /*   const filteredNews = fakeNewsData.filter((news) =>
      news.title.toLowerCase().includes(searchTerm.toLowerCase())
    ); */
    console.log("searche item", searchTerm);
  };

  const getNewsByCategory = async (category = "general") => {
    const result = await getByCategory(category);
    setNewsData(result.data.articles);
  };
  return (
    <ScrollView showVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <SearchBar onSubmit={handleSearchSubmit} />
        <CategoryList selectedCategoryInfo={getNewsByCategory} />
        <HeadlineList />

        <NewsList newsData={newsData} />
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
