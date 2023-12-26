/** @format */

// NewsList.js
import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";

const NewsList = ({ data, onPress }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onPress(item)}>
          <View style={{ padding: 16 }}>
            <Image
              source={{ uri: item.image }}
              style={{ width: "100%", height: 200, marginBottom: 10 }}
            />
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {item.title}
            </Text>
            <Text>{item.description}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NewsList;
