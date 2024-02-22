/** @format */

import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../contants/Colors";
import { useSelector } from "react-redux";
import ChannelsLayout from "../components/youtube/ChannelsLayout";

const PracticesScreen = () => {
  const darkMode = useSelector((selector) => selector.theme.isDarkTheme);
  //https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails%2Fdefault&id=UCjLv1XVYi5K4Pq33lY0K22w&key=channelID
  //take yotutuen channel's icon with channel id , for playlists !!
  // put channel icons and display all  videos when clicked the icon, use youtube mini card  and to display use video display screeen
  // then create like  button and save liked videos into context
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: darkMode ? Colors.black : Colors.background },
      ]}
    >
      <ChannelsLayout />
    </SafeAreaView>
  );
};

export default PracticesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
