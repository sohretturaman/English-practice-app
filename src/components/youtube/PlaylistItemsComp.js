/** @format */

import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../contants/Colors";
import { useNavigation } from "@react-navigation/native";

const PlaylistItemsComp = ({ data }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={() => {
        navigation.navigate("Videoplay", { playlistData: data });
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${data.contentDetails.videoId}/hqdefault.jpg`, // to being able to load all type images
          }}
          style={{
            width: "40%",
            height: 100,
            resizeMode: "cover",
          }}
        />
        <View style={styles.textWrapper}>
          <Text style={styles.title} numberOfLines={3} ellipsizeMode="tail">
            {data.snippet.title}{" "}
          </Text>
          <Text style={styles.subtitle} numberOfLines={1} ellipsizeMode="tail">
            {data.snippet.channelTitle}{" "}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default PlaylistItemsComp;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    width: "100%",
    height: "auto",
    elevation: 10,
    backgroundColor: Colors.white,
  },
  innderContainer: {
    flexDirection: "row",
    backgroundColor: Colors.favGray,
  },
  pressed: {
    opacity: 0.5,
  },

  title: {
    padding: 5,
    fontSize: 15,
    fontWeight: "400",
    color: Colors.black,
    flex: 1,
    flexWrap: "wrap",
    width: "100%",
  },
  subtitle: {
    color: Colors.secondary,
    fontSize: 12,
    fontWeight: "400",
  },
  textWrapper: {
    width: "60%",
    paddingVertical: 5,
    paddingHorizontal: 5,
    flexWrap: "wrap",
    paddingBottom: 5,
  },
});
