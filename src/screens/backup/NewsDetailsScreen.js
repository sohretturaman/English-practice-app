/** @format */

// NewsDetails.js
import React from "react";
import { View, Text, Image, Button } from "react-native";

const NewsDetailsScreen = ({ route, navigation }) => {
  const { id } = route.params;

  // You can fetch the news details based on the id
  // For now, you can use a placeholder object
  const news = {
    id,
    title: "Breaking News 1",
    description: "This is a breaking news article.",
    image: "https://via.placeholder.com/300",
  };

  const handleSave = () => {
    // Implement the logic to save the news (you may use Redux here)
    // For now, you can console.log to see it's working
    console.log("News saved:", news);
  };

  return (
    <View style={{ padding: 16 }}>
      <Image
        source={{ uri: news.image }}
        style={{ width: "100%", height: 200, marginBottom: 10 }}
      />
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        {news.title}
      </Text>
      <Text>{news.description}</Text>
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

export default NewsDetailsScreen;
