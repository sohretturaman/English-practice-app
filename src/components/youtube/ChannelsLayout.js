/** @format */

import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Channel from "./Channel";
import { ScrollView } from "react-native-virtualized-view";
import Colors from "../../contants/Colors";
import { BeginnersChanelsData } from "../../utils/playlistsData/ChannelPlaylistsData";
import MainPlaylists from "../../utils/playlistsData/ChannelPlaylistsData";

const ChannelsLayout = () => {
  return (
    <ScrollView
      style={{ alignSelf: "flex-start", height: "100%", width: "100%" }}
    >
      <View style={styles.container}>
        <View style={styles.listWrapper}>
          <Text style={styles.text}>
            Choose a Channel To Level Up Your English{" "}
          </Text>
          <FlatList
            data={MainPlaylists}
            renderItem={({ item }) => <Channel iconData={item} />}
            keyExtractor={(item) => item.id}
            numColumns={3}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ChannelsLayout;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10,
    marginVertical: 5,
    paddingBottom: 5,
    color: Colors.coral,
  },

  listWrapper: {
    marginTop: 15,
    width: "100%",
    alignItems: "center",
  },
  container: {
    paddingBottom: 60,
    alignItems: "center",
    justifyContent: "space-between",
  },
  topContainer: {
    marginVertical: 10,
    alignItems: "center",
    height: 200,
    marginLeft: 5,
  },
});
