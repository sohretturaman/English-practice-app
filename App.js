/** @format */

import { StatusBar } from "expo-status-bar";
import * as Notifications from "expo-notifications";
import AddTime from "./src/screens/AddTime";
import Tasks from "./src/screens/Tasks";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./src/screens/HomePage";
import { PaperProvider } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Colors from "./src/components/Colors";
import Notes from "./src/screens/Notes";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    // determines how scheduleNotificationAsync is called
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowAlert: true,
  }),
});

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  function MyBottomTab() {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Notes"
          component={Notes}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <MaterialCommunityIcons
                  name="clipboard-text-multiple"
                  size={24}
                  color={Colors.accent16}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Tasks"
          component={Tasks}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <FontAwesome
                  name="check-square-o"
                  size={24}
                  color={Colors.accent16}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MainPage" component={MyBottomTab} />
          <Stack.Screen name="AddTime" component={AddTime} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

// todo app yap geçici olarak sakla veya , context içine koy, react native selice de deneyebilirsin kolay olacaktır
// task app yap sonunda da bir alaram butonu koy notification, task app yap note değil ve kaydırmalı özellik ekle
//rest api kullanabilrisin oldukça kolay pratik yap

//Note : got that id ,after configure app.json file and eas build:configure from eas.json file
//Can not initialize the getExpoPushTokenAsync() func without id in expo sdk 49
//addNotificationRecivedListenet function returns a substriction object which  we can then  use for cleaning up that subsctiption ,so cleaning up and remove this event listener whenever we dont need it anymore. By return , useEffect will work whenever we got a new notification ,
// whenever func is reexecuted or cleaned up
//create a addNotificationResponseRecivedListender funtion for reacting incoming notifications

//use getExpıPushToken , the method we must call to geet this push token for this device,
//which we can use with expo's push notification server. And this method will resolve the token for running device.
//And if the app is running on multiple devices, each device has own unique push token id

//to comment out the code : Shift + Alt + A
