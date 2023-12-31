/** @format */

// SearchBar.js
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Implement the logic to fetch news based on the search term
    // For now, you can console.log to see it's working
    console.log("Search term:", searchTerm);
    onSubmit(searchTerm);
  };

  return (
    <View style={styles.contianer}>
      <Ionicons name="search" size={24} color="gray" style={styles.icon} />
      <TextInput
        style={{}}
        placeholder="Discover more news..."
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
        onSubmitEditing={handleSearch}
      />
    </View>
  );
};

export default SearchBar;
const styles = StyleSheet.create({
  contianer: {
    flexDirection: "row",
    padding: 16,
    borderColor: "gray",
    borderWidth: 0.5,
    padding: 5,
    marginTop: 10,
    width: "90%",
    alignSelf: "center",
    elevation: 1,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  icon: {
    marginRight: 5,
  },
});
