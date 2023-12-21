/** @format */

import { StyleSheet, Text, View, Button } from "react-native";
import React, { useEffect, useState } from "react";
import AddTime from "./AddTime";
import * as Notifications from "expo-notifications";
import { useNavigation } from "@react-navigation/native";

const HomePage = () => {
  const navigation = useNavigation();
  const [noftTime, setNotfTime] = useState(null);

  useEffect(() => {
    const getNotificationPermission = async () => {
      const permissionState = await Notifications.getPermissionsAsync(); // gives current state of permission
      console.log("permissionState", permissionState.status);

      if (permissionState.status !== "granted") {
        const askPersmission = await Notifications.requestPermissionsAsync(); //request permission
        console.log("asked for permission", askPersmission.status);

        return askPersmission.status;
      }
      if (permissionState.status !== "granted") {
        Alert.alert(
          "Notification permission not granted",
          "please proide notification permission"
        );
      }

      const token = await Notifications.getExpoPushTokenAsync(
        "5d0d322c-59d9-4477-823a-bb758a88ccb3"
      );
      console.log("token with expo id", token);
      if (Platform.OS == "android") {
        await Notifications.getNotificationChannelAsync("default", {
          // should do that for andorid
          name: "default",
          importance: Notifications.AndroidImportance.HIGH,
        });
      }
    };
    getNotificationPermission();
  }, []);

  useEffect(() => {
    //for local notification and reactinf push notification ,otherwise dont able to see the incoming notifications
    const substriction = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log(
          "notifiction is received",
          notification.request.content.body
        );
      }
    );
    const RemoveSubscription =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log("response", response.notification.request.content.data);
      });

    return () => {
      substriction.remove();
      RemoveSubscription.remove();
    };
  }, []);

  const hanleScheduleTimeNotification = async () => {
    const seconds = Math.floor((noftTime - new Date().getTime()) / 1000);
    console.log(
      "handle notficiaton func is triggered , time for notifiacion",
      seconds
    );

    try {
      // Schedule a notification after the specified reminder time
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Reminder",
          body: "Time to do something!",
        },
        trigger: {
          seconds: seconds ? seconds : 1,
          repeats: false, // Set to true if you want the notification to repeat
        },
      });
    } catch (error) {
      console.error("Error scheduling notification:", error);
    }
  };

  const SendPushNotificationHandler = () => {
    fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "ExponentPushToken[Sy-jk9CIaM9JAK__1s5DhL]",
        title: "you got the first notification ?",
        body: "yes or no ?",
      }),
    });
  };

  async function onSendLocalNotificaionHanler() {
    await Notifications.scheduleNotificationAsync({
      // got notification on real android device as a local notification
      content: {
        title: "you got first notification",
        body: "first notification description",
        data: { userName: "Meryem" },
      },

      trigger: {
        seconds: 1,
      },
    });
  }

  function onHandleNotificationTime(date) {
    console.log("got the time from calendar", date);

    setNotfTime(date);
    hanleScheduleTimeNotification(date);
  }
  return (
    <View>
      <Text>HomePage</Text>
      <View style={styles.container}>
        <Text>First notification App!</Text>
        <Button
          title="send Local notification"
          onPress={onSendLocalNotificaionHanler}
        />
        <Button
          style={{ marginTop: 10 }}
          title="send Push notification"
          onPress={SendPushNotificationHandler}
        />
        <AddTime handleNotificaionTime={onHandleNotificationTime} />
        <Text>
          Time : {noftTime?.toDateString() + noftTime?.toLocaleTimeString()}
        </Text>

        <Button
          title="Go to Tasks"
          onPress={() => navigation.navigate("Tasks")}
        />
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
