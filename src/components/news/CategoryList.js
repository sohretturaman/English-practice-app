/** @format */

import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-paper";
import Colors from "../../contants/Colors";
import { Pressable } from "react-native";

// "Latest", item has been removed
const CategoryList = () => {
  const categoryData = ["World Wide", "Businnes", "Sports", "Life", "Movie"];
  const [catgPressedItem, setCatgPressedItem] = useState(null);

  function onCategoryPress({ item }) {
    console.log("category pressed item ", item);
    setCatgPressedItem(item);
  }

  const CategoryRenderItem = ({ item }) => {
    const selectedItem = catgPressedItem === item;
    // console.log("pressed item in category render", item);
    return (
      <View
        style={[
          styles.catgItemContiner,
          { backgroundColor: selectedItem ? Colors.coral : Colors.background },
        ]}
      >
        <Pressable
          onPress={onCategoryPress.bind(this, { item })}
          style={({ pressed }) => [
            styles.catgTitleWrapper,
            pressed && styles.pressedStyle,
          ]}
        >
          <Text
            style={[
              styles.catgTitle,
              { color: selectedItem ? "#fff" : Colors.darkGray },
            ]}
          >
            {" "}
            {item}
          </Text>
        </Pressable>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={categoryData}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <CategoryRenderItem item={item} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  catgTitle: {
    color: "black",
    fontSize: 15,
    fontWeight: "500",
    paddingHorizontal: 2,
  },
  catgItemContiner: {
    marginHorizontal: 5,
    backgroundColor: "red",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  catgTitleWrapper: {
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
  },
  pressedStyle: {
    opacity: 0.5,
  },
});
