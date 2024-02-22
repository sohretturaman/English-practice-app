/** @format */

import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CardYt = ({ data }) => {
  console.log("data.id ", data.id);

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate("Videoplay", { data: data })}
        style={({ pressed }) => [styles.card, pressed && styles.pressed]}
      >
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${data.id.videoId}/hqdefault.jpg`,
          }}
          style={styles.cardImage}
        />
      </Pressable>
      <View style={styles.bottomWrapper}>
        <MaterialIcons name="account-circle" size={40} color="#212121" />
        <View style={styles.bottomTextWrapper}>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
            {data.snippet.title}
          </Text>
          <Text style={styles.subtitle}>{data.snippet.channelTitle}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardYt;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
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
  card: {
    width: "100%",
    height: 200,
  },
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
