/** @format */

import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Channel from "./Channel";
import { ScrollView } from "react-native-virtualized-view";
import Colors from "../../contants/Colors";

const ChannelsLayout = () => {
  const data = [
    "https://picsum.photos/200/20",
    "https://picsum.photos/200/390",
    "https://picsum.photos/200/290",
    "https://picsum.photos/200/90",
    "https://picsum.photos/200/30",
    "https://picsum.photos/200/",
    "https://picsum.photos/200/20",
    "https://picsum.photos/200/390",
    "https://picsum.photos/200/280",
    "https://picsum.photos/200/20",
    "https://picsum.photos/200/390",
    "https://picsum.photos/200/280",
    "https://picsum.photos/200/500",
  ];
  return (
    <ScrollView style={{ alignSelf: "flex-start" }}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.text}>Education channels for beginners </Text>
          <FlatList
            data={data}
            renderItem={({ item }) => <Channel data={item} margin={10} />}
            keyExtractor={(item, index) => index}
            horizontal={true}
          />
        </View>
        <View style={styles.listWrapper}>
          <Text style={styles.text}> Level Up Your English </Text>
          <FlatList
            data={data}
            renderItem={({ item }) => <Channel data={item} margin={18} />}
            keyExtractor={(item, index) => index}
            numColumns={2}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ChannelsLayout;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10,
    marginVertical: 5,
    paddingBottom: 5,
    color: Colors.coral,
  },

  listWrapper: {
    marginTop: 15,
    width: "100%",
    alignItems: "center",
  },
  container: {
    paddingBottom: 60,
    alignItems: "center",
    justifyContent: "space-between",
  },
  topContainer: {
    marginVertical: 10,
    alignItems: "center",
    height: 200,
  },
});
