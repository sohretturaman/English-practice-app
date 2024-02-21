/** @format */

import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import YoutubePlayer from "react-native-youtube-iframe";

// https://i.ytimg.com/vi/Zqnz9jGg0kk/default.jpg

const CardYt = () => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => console.log("Pressed")}
        style={({ pressed }) => [styles.card, pressed && styles.pressed]}
      >
        {/*    <Image
          source={require("../../contants/img/ytimage.jpg")}
          style={styles.cardImage}
        /> */}
        <YoutubePlayer height={200} play={true} videoId={"Zqnz9jGg0kk"} />
      </Pressable>
      <View style={styles.bottomWrapper}>
        <Image
          source={{ uri: "https://i.pravatar.cc/100" }}
          style={styles.IconImage}
        />
        <View style={styles.bottomTextWrapper}>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
            Title of youtube video, the context is here brieflylskmdflkm
            lskdmfksmdfk slklkdmflks nsdfknkfj osfısdjfjklmknsdjkfnkj
          </Text>
          <Text style={styles.subtitle}>
            Subtitle of yotube video,fontsize is 12
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CardYt;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  IconImage: {
    height: 40,
    width: 40,
    borderRadius: 50,
    marginLeft: 2,
  },

  cardImage: {
    width: "100%",
    height: 200,
  },
  card: {},
  bottomWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    padding: 2,
  },

  bottomTextWrapper: {
    marginHorizontal: 5,
    flexDirection: "column",
  },
  title: {
    fontSize: 16,
  },
  subtitle: {
    fontSize: 12,
  },
  pressed: {
    opacity: 0.5,
  },
});
