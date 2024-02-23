/** @format */

import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import CustomHeader from "../../components/notes/CustomHeader";
import { useRoute } from "@react-navigation/native";
import PlaylistItemsComp from "../../components/youtube/PlaylistItemsComp";
import { ScrollView } from "react-native-virtualized-view";

const PlaylistItems = () => {
  const route = useRoute();
  const headerTitle = route.params.playlistName;
  console.log("route", headerTitle);

  return (
    <ScrollView style={styles.container}>
      <CustomHeader header={headerTitle} />
      {route.params?.data.map((item, index) => {
        return (
          <View key={index}>
            <PlaylistItemsComp data={item} />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default PlaylistItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
