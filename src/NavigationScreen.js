/** @format */

import { StatusBar } from "expo-status-bar";
import * as Notifications from "expo-notifications";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./screens/HomePage";
import { PaperProvider } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Colors from "./contants/Colors";
import Notes from "./screens/Notes";
import Tasks from "./screens/Tasks";
import BooksScreen from "./screens/BooksScreen";
import PracticesScreen from "./screens/PracticesScreen";
import NewsScreen from "./screens/NewsScreen";
import TranslateScreen from "./screens/TranslateScreen";
import MyLibraryScreen from "./screens/Drawer/MyLibraryScreen";
import SavedNews from "./screens/Drawer/SavedNews";
import FavedWords from "./screens/FavedWords";
import ChatGptScreen from "./screens/Drawer/ChatGptScreen";
import NotificationScreen from "./screens/Drawer/NotificationScreen";
import CustomDrawer from "./components/drawer/CustomDrawer";
import Header from "./components/drawer/Header";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { changeTheme } from "./store/Reducers";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AddNote from "./screens/AddNote";
import SettingsScreen from "./screens/Drawer/SettingsScreen";
import NewsDetailsScreen from "./screens/backup/NewsDetailsScreen";
import CustomHeader from "./components/notes/CustomHeader";

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
const Drawer = createDrawerNavigator();
const TopTab = createMaterialTopTabNavigator();

const DrawerRouter = () => {
  const darkMode = useSelector((selector) => selector.theme.isDarkTheme);
  return (
    <Drawer.Navigator
      initialRouteName="Practices"
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerTintColor: Colors.lightGray,
        drawerActiveTintColor: Colors.darkGray,
        drawerActiveBackgroundColor: Colors.lightGray,
        drawerInactiveTintColor: "white",
        drawerStyle: { backgroundColor: Colors.primary },
        header: ({ navigation }) => {
          return <Header navigation={navigation} header={"My Practice App"} />;
        },
        sceneContainerStyle: {
          backgroundColor: darkMode ? Colors.black : Colors.background,
        }, //changed all drawer screen's background color at once
      }}
    >
      <Drawer.Screen
        name="HomeBottomDrawer"
        component={MyBottomTab}
        options={{
          title: "Home-practices",
          drawerLabelStyle: { fontSize: 16 },
          drawerIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={24}
              color={focused ? Colors.darkGray : Colors.lightGray}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="MyLibrary"
        component={MyLibraryScreen}
        options={{
          title: "My Library",
          drawerLabelStyle: { fontSize: 16 },
          drawerIcon: ({ focused }) => (
            <Ionicons
              name="library"
              size={24}
              color={focused ? Colors.black : Colors.lightGray}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="SavedNews"
        component={SavedNews}
        options={{
          title: "Saved News",
          drawerLabelStyle: { fontSize: 16 },
          drawerIcon: ({ focused }) => (
            <Ionicons
              name="md-newspaper"
              size={24}
              color={focused ? Colors.black : Colors.lightGray}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="ChatGpt"
        component={ChatGptScreen}
        options={{
          title: "Chat Gpt",
          drawerLabelStyle: { fontSize: 16 },
          drawerIcon: ({ focused }) => (
            <Ionicons
              name="ios-chatbox-ellipses"
              size={24}
              color={focused ? Colors.black : Colors.lightGray}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          title: "Notifications",
          drawerLabelStyle: { fontSize: 16 },
          drawerIcon: ({ focused }) => (
            <Ionicons
              name="notifications"
              size={24}
              color={focused ? Colors.black : Colors.lightGray}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
          drawerLabelStyle: { fontSize: 16 },
          drawerIcon: ({ focused }) => (
            <Ionicons
              name="settings"
              size={24}
              color={focused ? Colors.secondary : Colors.lightGray}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

function MyBottomTab() {
  const screenOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true, //Solved problem to hide bottom tabbar on keyboard
    tabBarStyle: {
      elevation: 1,
      position: "absolute",
      backgroundColor: Colors.white,
      bottom: 8,
      left: 8,
      right: 8,
      borderRadius: 10,
      height: 60,
    },
  };
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="noteTaks"
        component={MyTabs}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <MaterialCommunityIcons
                name="notebook-edit-outline"
                size={25}
                color={focused ? Colors.secondary : Colors.darkGray}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="BooksScreen"
        component={BooksScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <MaterialCommunityIcons
                name="bookshelf"
                size={25}
                color={focused ? Colors.secondary : Colors.darkGray}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Practices"
        component={PracticesScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <MaterialCommunityIcons
                name="view-dashboard"
                size={25}
                color={focused ? Colors.secondary : Colors.darkGray}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Newsscreen"
        component={NewsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <FontAwesome
                name="newspaper-o"
                size={25}
                color={focused ? Colors.secondary : Colors.darkGray}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="TranslateScreen"
        component={TranslateScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <MaterialCommunityIcons
                name="google-translate"
                size={25}
                color={focused ? Colors.secondary : Colors.darkGray}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

function MyTabs() {
  return (
    <TopTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: { fontSize: 15, fontWeight: "bold" },
        tabBarStyle: { backgroundColor: Colors.white },
        tabBarIndicatorStyle: {
          height: 1.5,
          backgroundColor: Colors.secondary,
        },
        tabBarActiveTintColor: Colors.secondary,
      }}
    >
      <TopTab.Screen name="Notes" component={Notes} />
      <TopTab.Screen name="Tasks" component={Tasks} />
    </TopTab.Navigator>
  );
}

const RootStack = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    AsyncStorage.getItem("savedTheme").then((value) => {
      dispatch(changeTheme(JSON.parse(value)));
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "black" }, //doesn't work4
        }}
      >
        <Stack.Screen name="DrawerRoot" component={DrawerRouter} />
        {/*  <Stack.Screen name="Maintab" component={MyBottomTab} /> */}

        <Stack.Screen name="FavedWords" component={FavedWords} />
        <Stack.Screen name="AddNote" component={AddNote} />
        <Stack.Screen name="NewsDetails" component={NewsDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function NavigationScreen() {
  return (
    <PaperProvider>
      <RootStack />
    </PaperProvider>
  );
}

// to open replace console use CTRL + H !!
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
