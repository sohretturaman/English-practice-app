/** @format */

import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import NotificationItem from "./NotificationItem";

const NotificationsList = () => {
  const fakeNotifications = [
    {
      id: "2345432",
      title: "Daily english words",
      desc: "Lorem ipsum dolor sit amet",
      date: "3 hours",
      checked: true,
      type: "translator",
    },
    {
      id: "09876",
      title: "Task Reminder",
      desc: "finish english practice app",
      date: "5 minutes ",
      checked: false,
      type: "task",
    },
    {
      id: "978698",
      title: "Note Reminder",
      desc: "finish english practice app",
      date: "3/3/2023",
      checked: false,
      type: "note",
    },
    {
      id: "869798",
      title: "Daily News for practice",
      desc: "Check out latest news",
      date: "3/3/2023",
      checked: true,
      type: "news",
    },
    {
      id: "8698798",
      title: "Books Reminder for practice",
      desc: "Check out new books ",
      date: "3/3/2023",
      checked: false,
      type: "book",
    },
  ];
  return (
    <View>
      <FlatList
        nestedScrollEnabled={true}
        scrollEnabled={false}
        data={fakeNotifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NotificationItem item={item} />}
      />
    </View>
  );
};

export default NotificationsList;

const styles = StyleSheet.create({});

{
  /**
error message , solution is  adding those two lines in flatlist, nestedScrollEnabled={true}  scrollEnabled={false}
 ERROR  VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.
    at VirtualizedList (http://10.196.0.129:8081/node_modules%5Cexpo%5CAppEntry.bundle//&platform=android&dev=true&hot=false&lazy=true:74359:36)*/
}
