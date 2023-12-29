/** @format */

import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import SettingsContext from "../../components/settings/SettingsContext";
import BottomSheetComp from "../../components/settings/BottomSheetComp";

const SettingsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SettingsContext />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});

export default SettingsScreen;
