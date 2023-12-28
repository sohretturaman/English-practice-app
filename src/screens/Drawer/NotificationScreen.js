/** @format */

import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import NotificationsList from "../../components/notification/NotificationsList";

const NotificationScreen = () => {
  return (
    <ScrollView>
      <NotificationsList />
    </ScrollView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({});
