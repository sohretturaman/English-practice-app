/** @format */

import { StatusBar } from "expo-status-bar";
import { Alert, Button, Platform, StyleSheet, Text, View } from "react-native";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import { useEffect } from "react";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    // determines how scheduleNotificationAsync is called
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowAlert: true,
  }),
});

export default function App() {
  useEffect(() => {
    const getNotificationPermission = async () => {
      const permissionState = await Notifications.getPermissionsAsync(); // gives current state of permission
      console.log("permissionState", permissionState.status);
      if (permissionState.status !== "granted") {
        const askPersmission = await Notifications.requestPermissionsAsync(); //request permission
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
    const substriction = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log(
          "notifiction is received",
          notification.request.content.data.userName
        );
      }
    );
    const RemoveSubscription =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(
          "response",
          response.notification.request.content.data.userName
        );
      });

    return () => {
      substriction.remove();
      RemoveSubscription.remove();
    };
  }, []);

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

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
//Note : got that id ,after configure app.json file and eas build:configure from eas.json file
//Can not initialize the getExpoPushTokenAsync() func without id in expo sdk 49
//addNotificationRecivedListenet function returns a substriction object which  we can then  use for cleaning up that subsctiption ,so cleaning up and remove this event listener whenever we dont need it anymore. By return , useEffect will work whenever we got a new notification ,
// whenever func is reexecuted or cleaned up
//create a addNotificationResponseRecivedListender funtion for reacting incoming notifications

//use getExpıPushToken , the method we must call to geet this push token for this device,
//which we can use with expo's push notification server. And this method will resolve the token for running device.
//And if the app is running on multiple devices, each device has own unique push token id

//to comment out the code : Shift + Alt + A
