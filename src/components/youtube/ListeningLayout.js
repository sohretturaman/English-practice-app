/** @format */

import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { pocastsYt } from "../../utils/PodcastsYt";
import { songsYt } from "../../utils/Songsyt";
import { newsYt } from "../../utils/NewsYt";
import InputButtonYt from "../uı/InputButtonYt";
import CardYt from "./CardYt";
import YoutubeIframe from "react-native-youtube-iframe";
import YoutubeMiniCard from "./YoutubeMiniCard";
import { Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const ListeningLayout = () => {
  const navigation = useNavigation();
  return (
    <View>
      <InputButtonYt onPress={() => navigation.navigate("SearchScreen")} />

      {/*  news headline horizontal */}
      <FlatList
        data={newsYt.items}
        renderItem={({ item }) => <YoutubeMiniCard data={item} />}
        keyExtractor={(item) => item.id.videoId}
        horizontal={true}
      />

      {/** songs with lyrics horizontal */}
      <FlatList
        data={songsYt.items}
        renderItem={({ item }) => <YoutubeMiniCard data={item} />}
        keyExtractor={(item) => item.id.videoId}
        horizontal={true}
      />
      {/** pocasts vertical */}
      <FlatList
        data={pocastsYt.items}
        renderItem={({ item }) => <CardYt data={item} />}
        keyExtractor={(item) => item.id.videoId}
        horizontal={false}
      />
    </View>
  );
};

export default ListeningLayout;

const styles = StyleSheet.create({});
