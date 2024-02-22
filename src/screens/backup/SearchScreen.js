/** @format */

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useState } from "react";
import SearchBar from "../../components/uı/SearchBar";
import { useNavigation } from "@react-navigation/native";
import CustomHeader from "../../components/notes/CustomHeader";
import SearchCard from "../../components/youtube/SearchCard";
import { YOUTUBE_API_KEY } from "@env";
import { SearchedVideosContext } from "../../store/SearchedVideosContext";
import Colors from "../../contants/Colors";

const SearchScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const searchedItemsContext = useContext(SearchedVideosContext);
  const searchedItemsData = searchedItemsContext.searchedVideos;
  const getSearchData = async (searchInput) => {
    try {
      setIsLoading(true);
      await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&q=${searchInput}&type=video&part=snippet&maxResults=2`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("data yt from api", data);
          searchedItemsContext.AddSearchedVideos(data.items);
          setIsLoading(false);
        });
    } catch (error) {
      console.log("an error accured while fetching data", error);
      setIsLoading(false);
    }
  };

  const renderItem = ({ item }) => {
    return (
      <SearchCard
        channelTitle={item?.snippet.channelTitle}
        title={item?.snippet.title}
        videoId={item?.id.videoId}
      />
    );
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <CustomHeader header={"Explore more on Youtube"} />
      <SearchBar placeholder="Search.." onSubmit={getSearchData} />
      {isLoading && (
        <ActivityIndicator size={"large"} color={Colors.secondary} />
      )}
      <FlatList
        data={searchedItemsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.videoId}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
