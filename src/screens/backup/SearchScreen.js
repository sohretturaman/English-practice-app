/** @format */

import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useContext, useState } from "react";
import SearchBar from "../../components/uı/SearchBar";
import { useNavigation } from "@react-navigation/native";
import CustomHeader from "../../components/notes/CustomHeader";
import SearchCard from "../../components/youtube/SearchCard";
import { YOUTUBE_API_KEY } from "@env";
import { podcasts } from "../../utils/PodcastsYt";
//console.log("podcasts", podcasts.items);
import { SearchedVideosContext } from "../../store/SearchedVideosContext";

const SearchScreen = () => {
  const [serchData, setSearchData] = useState(podcasts.items);
  const searchedItemsContext = useContext(SearchedVideosContext);
  console.log("searched item context", searchedItemsContext.searchedVideos);

  const getSearchData = async (searchInput) => {
    try {
      await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&q=${searchInput}&type=video&part=snippet&maxResults=2`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("data yt from api", data);
          setSearchData(data.items);
          searchedItemsContext.AddSearchedVideos(data.items);
        });
    } catch (error) {
      console.log("an error accured while fetching data", error);
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
      <FlatList
        data={serchData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.videoId}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
