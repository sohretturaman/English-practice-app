/** @format */

import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
const CustomDrawer = (props) => {
  const scrollY = useSharedValue(0);

  const handleScroll = (event) => {
    scrollY.value = event.nativeEvent.contentOffset.y;
  };

  const opacity = useAnimatedStyle(() => {
    // Adjust the range and values based on your requirements
    return {
      opacity: withSpring(scrollY.value <= 100 ? 1 : 0),
    };
  });
  return (
    <Animated.View style={[styles.header, opacity]}>
      <SafeAreaView>
        <Text>CustomDrawer</Text>
        <DrawerContentScrollView {...props}>
          <Text>CustomDrawer</Text>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </SafeAreaView>
    </Animated.View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
