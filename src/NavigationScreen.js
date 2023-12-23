/** @format */

import { StatusBar } from "expo-status-bar";
import * as Notifications from "expo-notifications";
import AddTime from "./screens/AddTime";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./screens/HomePage";
import { PaperProvider } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
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
import CalendarScreen from "./screens/Drawer/CalendarScreen";
import NotificationScreen from "./screens/Drawer/NotificationScreen";
import CustomDrawer from "./components/drawer/CustomDrawer";
import Header from "./components/drawer/Header";

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

const DrawerRouter = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Practices"
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerTintColor: Colors.lightGray,
        drawerActiveTintColor: "black",
        drawerActiveBackgroundColor: Colors.lightGray,
        drawerInactiveTintColor: "white",

        header: ({ navigation }) => {
          return <Header navigation={navigation} header={"My Practice App"} />;
        },
      }}
    >
      <Drawer.Screen
        name="HomeBottomDrawer"
        component={MyBottomTab}
        options={{
          title: "Home-practices",
          drawerLabelStyle: { fontSize: 18 },
          drawerIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={24}
              color={focused ? Colors.black : Colors.lightGray}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="MyLibrary"
        component={MyLibraryScreen}
        options={{
          title: "My Library",
          drawerLabelStyle: { fontSize: 18 },
          drawerIcon: ({ focused }) => (
            <Ionicons
              name="library"
              size={24}
              color={focused ? Colors.black : Colors.lightGray}
            />
          ),
        }}
        // options={{ drawerIcon: () => <Text style={{color: 'white'}}>#</Text> }}
      />
      <Drawer.Screen
        name="SavedNews"
        component={SavedNews}
        options={{
          title: "Saved News",
          drawerLabelStyle: { fontSize: 18 },
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
          drawerLabelStyle: { fontSize: 18 },
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
        name="Calendar"
        component={CalendarScreen}
        options={{
          title: "Calendar",
          drawerLabelStyle: { fontSize: 18 },
          drawerIcon: ({ focused }) => (
            <Ionicons
              name="calendar"
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
          drawerLabelStyle: { fontSize: 18 },
          drawerIcon: ({ focused }) => (
            <Ionicons
              name="notifications"
              size={24}
              color={focused ? Colors.black : Colors.lightGray}
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
        name="Notes"
        component={Notes}
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
              <Ionicons
                name="newspaper-outline"
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

export default function NavigationScreen() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="DrawerRoot" component={DrawerRouter} />
          {/*  <Stack.Screen name="Maintab" component={MyBottomTab} /> */}
          <Stack.Screen name="AddTime" component={AddTime} />
          <Stack.Screen name="FavedWords" component={FavedWords} />
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
