/** @format */

import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "../../contants/Colors";
import { useNavigation } from "@react-navigation/native";

const Channel = ({ iconData, margin }) => {
  const [imageUrlList, setImageUrlList] = useState([]);

  useEffect(() => {
    if (iconData?.url) {
      fetch(`${iconData.url}`)
        .then((response) => response.json())
        .then((data) => {
          const url = data?.items[0]?.snippet?.thumbnails?.default?.url;
          setImageUrlList([url]);
          console.log("rerednered");
        })
        .catch((error) => console.error("Error fetching channel data:", error));
    }
  }, []);

  const navigation = useNavigation(); //transition to playlist items screen

  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressedItem]}
    >
      {imageUrlList.map((url, index) => (
        <Image key={index} source={{ uri: url }} style={styles.image} />
      ))}
      <View style={styles.textWrapper}>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.text}>
          {iconData?.name}
        </Text>
      </View>
    </Pressable>
  );
};

export default Channel;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    width: 100,
    height: 150,
    justifyContent: "space-between",
    borderRadius: 10,
    maxWidth: 200,
    backgroundColor: Colors.favGray,
    elevation: 5,
    marginBottom: 15,
    justifyContent: "space-around",
    marginHorizontal: 10,
  },
  textWrapper: {
    padding: 5,
    paddingBottom: 10,
  },

  text: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.black,
    textAlign: "left",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  pressedItem: {
    opacity: 0.4,
  },
});
