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
import LoadingComp from "../components/uı/LoadingComp";

const NewsScreen = ({ navigation }) => {
  const [newsData, setNewsData] = useState();
  const [searchedNews, setSearchedNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("general");

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
    setSelectedCategory(category);
    setIsLoading(true);
    const result = await getByCategory(category);

    setNewsData(result.data.articles);
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingComp />;
  }

  //solution for keyboard problem in scrollview component ,it is avoindg keyboard on scroll
  //wrapp scrollview with keyboardavoiding view to solve  virtual keyboard problem
  return (
    <ScrollView
      showVerticalScrollIndicator={false}
      style={{ flex: 1 }}
      keyboardDismissMode="on-drag"
    >
      <View style={styles.container}>
        <SearchBar onSubmit={handleSearchSubmit} />
        <CategoryList
          selectedCategoryInfo={getNewsByCategory}
          selectedCategory={selectedCategory}
        />
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
    justifyContent: "center",
  },
});
