/** @format */

import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useContext, useReducer, useState } from "react";
import { WebView } from "react-native-webview";
import YoutubePlayer from "react-native-youtube-iframe";
import CustomHeader from "../../components/notes/CustomHeader";
import { useRoute } from "@react-navigation/native";
import { SearchedVideosContext } from "../../store/SearchedVideosContext";
import VideoContext from "../../components/youtube/VideoContext";
import Recommendations from "../../components/youtube/Recommendations";
import { ScrollView } from "react-native-virtualized-view";

const VideoPlay = () => {
  const route = useRoute();
  const data = route.params?.data;
  const searchedItems = useContext(SearchedVideosContext);

  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  return (
    <ScrollView
      nestedScrollEnabled={true}
      style={{ backgroundColor: "white", flex: 1 }}
    >
      <CustomHeader header={"Video Play"} />
      {/** recommendations to watch, saved searches and  saved news, podcasts and songs ,mix all of them*/}
      <View style={{ marginTop: 0 }}>
        <YoutubePlayer
          height={230}
          play={playing}
          onChangeState={onStateChange}
          videoId={data.id.videoId}
        />
      </View>
      <VideoContext data={data} />
      <Recommendations data={searchedItems.searchedVideos} />
    </ScrollView>
  );
};

export default VideoPlay;

const styles = StyleSheet.create({});

//To display youtube videos in webview !!,
// https://www.youtube.com/embed/${props.videoId}
//https://www.youtube.com/embed/yHQX7q8A_bU
/**
 * <WebView
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ uri: "https://www.youtube.com/embed/yHQX7q8A_bU" }}
      />
 */
