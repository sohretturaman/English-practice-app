/** @format */

import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import CardYt from "./CardYt";

const Recommendations = ({ data }) => {
  return (
    <View style={styles.listWrapper}>
      <Text style={styles.text}>Last Searched Videos</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <CardYt data={item} />}
        keyExtractor={(item) => item.id.videoId}
        nestedScrollEnabled={true}
      />
    </View>
  );
};

export default Recommendations;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10,
    marginVertical: 5,
    paddingBottom: 5,
  },

  listWrapper: {
    marginTop: 30,
  },
});
