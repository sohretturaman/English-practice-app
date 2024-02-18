/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBar from "../../components/uı/SearchBar";
import Header from "../../components/drawer/Header";
import { useNavigation } from "@react-navigation/native";
import CustomHeader from "../../components/notes/CustomHeader";

const SearchScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <CustomHeader header={"Explore more on Youtube"} />
      <SearchBar placeholder="Search.." />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
