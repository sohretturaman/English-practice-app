/** @format */

import React from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import { Switch, Text, Button, Drawer } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SettingsItemComp from "../../components/settings/SettingsItemComp";

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(false);

  const toggleSwitch = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleDeleteNotes = () => {
    // Implement your logic for deleting notes
  };

  const handleChangeLanguage = () => {
    // Implement your logic for changing language
  };

  const handleLogout = () => {
    // Implement your logic for logging out
  };

  const handleEditProfile = () => {
    // Implement your logic for editing the user's profile
  };

  const handleSendFeedback = () => {
    // Implement your logic for sending feedback
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Account</Text>
      <SettingsItemComp
        icon={"account"}
        title={"Edit Profile"}
        secondIcon={"chevron-right"}
      />

      <View style={{ marginTop: 20 }}>
        <Text style={styles.title}>Settings</Text>
        <SettingsItemComp
          icon={"bell"}
          title={"Notifications"}
          switchItem={
            <Switch value={notificationsEnabled} onValueChange={toggleSwitch} />
          }
        />
        <SettingsItemComp
          icon={"trash-can"}
          title={"Deleted Notes"}
          secondIcon={"chevron-right"}
        />
        {/* <SettingsItemComp icon={"home"} title={"Change Language"} /> */}
        <SettingsItemComp icon={"logout"} title={"Log out"} />
        <SettingsItemComp
          icon={"send"}
          title={"Send Feedback"}
          secondIcon={"chevron-right"}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

export default SettingsScreen;
