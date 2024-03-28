/** @format */

import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React, { useLayoutEffect, useState } from "react";

import { SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import NoteList from "../components/notes/NoteList";
import Colors from "../contants/Colors";


const Notes = () => {
  const darkMode = useSelector((selector) => selector.theme.isDarkTheme);
  console.log("dark mode in note", darkMode);



  // add undo,on top , addtexsize, textcolor on keyboard//  , add  fab group item to camra, voice and galery or put them horizontal on keyboard
  //add categories on top headline horizontally
  return (
    <SafeAreaView
      style={[
        styles.mainContainer,
        { backgroundColor: darkMode ? Colors.black : Colors.background },
      ]}
    >
      <NoteList />
    </SafeAreaView>
  );
};

export default Notes;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignContent: "center",
  },
});

{
  /**
give ronadom colors for categories in notes screen
import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

const RandomColorView = () => {
  const [backgroundColor, setBackgroundColor] = useState(getRandomColor);

  useEffect(() => {
    setBackgroundColor(getRandomColor);
  }, []);

  const getRandomColor = () => {
    const lightColors = [
      '#FFC0CB', // Pink
      '#ADD8E6', // Light Blue
      '#98FB98', // Pale Green
      '#FFD700', // Gold
      '#FFA07A', // Light Salmon
      '#87CEFA', // Light Sky Blue
    ];

    return lightColors[Math.floor(Math.random() * lightColors.length)];
  };

  return (
    <View style={[styles.container, { backgroundColor }]} />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RandomColorView;*/
}
