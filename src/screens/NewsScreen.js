/** @format */

// NewsScreen.js
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import NewsList from "../components/news/NewsList";
import SearchBar from "../components/uı/SearchBar";
import Axios from "axios"; // Import Axios correctly

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

  useEffect(() => {
    const getFetchNews = async () => {
      try {
        const response = await Axios.get(
          "https://fakenews.squirro.com/news/sport"
        );
        console.log(response.data); // Assuming the data is in response.data
        setNewsData(response.data); // Update the state with the fetched data
      } catch (error) {
        console.error(error);
      }
    };

    getFetchNews();
  }, []);

  return (
    <View>
      <SearchBar onSubmit={handleSearchSubmit} />
      <NewsList
        data={searchedNews.length > 0 ? searchedNews : newsData}
        onPress={handleNewsPress}
      />
    </View>
  );
};

export default NewsScreen;
