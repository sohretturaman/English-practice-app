/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";

const searchCard = () => {
  return (
    <View style={styles.containter}>
      <View style={styles.imageWraper}>
        <Image
          source={require("../../contants/img/planeTravel.jpg")}
          style={{ height: 100, width: "100%", resizeMode: "cover" }}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={2}>
          Title is here : English practicig app with react native
        </Text>
        <Text style={styles.subtext}> channel name .....</Text>
      </View>
    </View>
  );
};

export default searchCard;

const styles = StyleSheet.create({
  containter: {
    flexDirection: "row",
    width: "100%",
    height: 100,
    padding: 5,
  },
  textContainer: {
    padding: 5,
    width: "55%",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingBottom: 8,
  },
  imageWraper: {
    width: "44%",
  },
  title: {
    width: "100%",
    lineHeight: 20,
    paddingBottom: 5,
    fontSize: 16,
    color: "black",
  },

  subtext: {
    fontSize: 12,
  },
});
