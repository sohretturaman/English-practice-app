/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";

const VideoContext = ({ data }) => {
  return (
    <View style={styles.bottomWrapper}>
      <View style={styles.bottomTextWrapper}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {data.snippet.title}
        </Text>
        <Text style={styles.subtitle}>{data.snippet.channelTitle}</Text>
      </View>
    </View>
  );
};

export default VideoContext;

const styles = StyleSheet.create({
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
