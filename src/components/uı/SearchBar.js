/** @format */

// SearchBar.js
import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Implement the logic to fetch news based on the search term
    // For now, you can console.log to see it's working
    console.log("Search term:", searchTerm);
    onSubmit(searchTerm);
  };

  return (
    <View style={{ flexDirection: "row", padding: 16 }}>
      <TextInput
        style={{
          flex: 1,
          borderColor: "gray",
          borderWidth: 1,
          marginRight: 10,
          padding: 8,
        }}
        placeholder="Search for news..."
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
        onSubmitEditing={handleSearch}
      />
    </View>
  );
};

export default SearchBar;
