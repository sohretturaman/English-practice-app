/** @format */

import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  Share,
  Alert,
} from "react-native";
import React, { createContext, useCallback, useContext } from "react";
import CustomHeader from "../notes/CustomHeader";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../contants/Colors";
import * as WebBrowser from "expo-web-browser";
import * as Sharing from "expo-sharing";
import { SavedNewsContext } from "../../store/SavedNewsContext";

const NewsDetailComp = ({ news }) => {
  const newsContext = useContext(SavedNewsContext); // created context object to use addcontextfunc
  const publishTime = news.publishedAt.slice(0, 10);

  const handleShare = async () => {
    const result = await Share.share({
      message: `Check out this news: ${news.title} ${news.url}`,
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        console.log("shared with activity type: ", result.activityType);
      } else {
        console.log("shared");
      }
    }
    if (result.activityType === Share.dismissedAction) {
      console.log("dismissed", result.action, "and type", result.activityType);
    }
  };

  const handleonSave = useCallback(() => {
    const isSamePusblishTime = newsContext.news.filter(
      (item) => item.publishedAt === news.publishedAt
    );
    const isSameTitle = newsContext.news.filter(
      (item) => item.title === news.title
    );
    if (isSamePusblishTime.length !== 0 && isSameTitle.length !== 0) {
      Alert.alert("News already saved");
    } else {
      newsContext.AddSavedNews(news);
    }
  }, [newsContext]);
  return (
    <View style={styles.container}>
      <CustomHeader
        header={"Read News"}
        iconName={"share"}
        onIconPress={handleShare}
        MenuComp={() => (
          <MaterialCommunityIcons
            name="bookmark"
            size={25}
            color="white"
            onPress={handleonSave}
          />
        )}
      />
      <Image source={{ uri: news.urlToImage }} style={styles.image} />

      <View style={styles.contextWrapper}>
        <View style={styles.headlineWrapper}>
          <Text style={styles.source}>{news.source.name}</Text>
          <Text style={styles.date}>{publishTime}</Text>
        </View>

        <Text style={styles.title}>{news.title}</Text>
        <Text style={styles.desc}>{news.description}</Text>
      </View>

      <Pressable
        onPress={() => {
          WebBrowser.openBrowserAsync(news.url);
        }}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <Text style={styles.readMore}>Read</Text>
      </Pressable>
    </View>
  );
};

export default NewsDetailComp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  contextWrapper: {
    padding: 10,
  },
  headlineWrapper: {
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  source: {
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.primary,
  },
  date: {
    fontSize: 15,
    color: Colors.darkGray,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  desc: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
    color: Colors.darkGray,
  },

  pressed: {
    opacity: 0.5,
  },
  readMore: {
    padding: 10,
    fontSize: 16,
    color: Colors.primary,
  },
});
