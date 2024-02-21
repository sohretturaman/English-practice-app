/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBar from "../../components/uı/SearchBar";
import Header from "../../components/drawer/Header";
import { useNavigation } from "@react-navigation/native";
import CustomHeader from "../../components/notes/CustomHeader";

const SearchScreen = () => {
  const navigation = useNavigation();
  const getSearchData = async (searchInput) => {
    console.log("search input", searchInput);

    try {
      await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=AIzaSyCPJnjBeH7aJeq_4AnS-0E8SlG6cYBq-9M&q=${searchInput}&type=video&part=snippet&maxResults=2`
      )
        .then((res) => res.json())
        .then((data) => console.log("data from api", data));
    } catch (error) {
      console.log("an error accured while fetching data", error);
    }
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <CustomHeader header={"Explore more on Youtube"} />
      <SearchBar placeholder="Search.." onSubmit={getSearchData} />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
