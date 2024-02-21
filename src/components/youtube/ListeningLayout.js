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
    <ScrollView>
      <InputButtonYt onPress={() => navigation.navigate("SearchScreen")} />

      {/** songs with lyrics horizontal */}
      <View style={styles.listWrapper}>
        <Text style={styles.text}> Listening practice with poplular news </Text>
        <FlatList
          data={songsYt.items}
          renderItem={({ item }) => <YoutubeMiniCard data={item} />}
          keyExtractor={(item) => item.id.videoId}
          horizontal={true}
        />
      </View>

      {/*  news headline horizontal */}
      <View style={styles.listWrapper}>
        <Text style={styles.text}>Learn with latest news</Text>
        <FlatList
          data={newsYt.items}
          renderItem={({ item }) => <YoutubeMiniCard data={item} />}
          keyExtractor={(item) => item.id.videoId}
          horizontal={true}
        />
      </View>

      {/** pocasts vertical */}
      <View style={styles.listWrapper}>
        <Text style={styles.text}>Listen Poscasts</Text>
        <FlatList
          data={pocastsYt.items}
          renderItem={({ item }) => <CardYt data={item} />}
          keyExtractor={(item) => item.id.videoId}
          horizontal={false}
        />
      </View>
    </ScrollView>
  );
};

export default ListeningLayout;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10,
    marginVertical: 5,
    paddingBottom: 5,
  },

  listWrapper: {
    marginTop: 15,
  },
});

//nestedScrollEnabled={true} =>to avoid
//  VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.
