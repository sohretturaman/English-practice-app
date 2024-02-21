/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

const VideoPlay = () => {
  return (
    <View>
      <Text>VideoPlay</Text>
      <WebView
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ uri: "https://reactnative.dev/" }}
      />

      {/** recommendations to watch, saved searches and  saved news, podcasts and songs */}
    </View>
  );
};

export default VideoPlay;

const styles = StyleSheet.create({});

//To display youtube videos in webview !!,
// https://www.youtube.com/embed/${props.videoId}
//https://www.youtube.com/embed/yHQX7q8A_bU
