/** @format */

import React from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import { Switch, Text, Button } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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

  const renderSettingItem = (title, icon, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.settingItem}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name={icon} size={24} color="black" />
        </View>
        <View style={styles.textContainer}>
          <Text>{title}</Text>
        </View>
        <Switch value={notificationsEnabled} onValueChange={toggleSwitch} />
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Settings</Text>

      {renderSettingItem("Enable Notifications", "bell", toggleSwitch)}

      {renderSettingItem("Delete Notes", "trash-can", handleDeleteNotes)}

      {renderSettingItem("Change Language", "earth", handleChangeLanguage)}

      {renderSettingItem("Logout", "logout", handleLogout)}

      {renderSettingItem("Edit Profile", "account", handleEditProfile)}

      {renderSettingItem("Send Feedback", "message", handleSendFeedback)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    padding: 16,
    backgroundColor: "lightgray",
    borderRadius: 8,
    elevation: 2, // Adds a shadow on Android
  },
  iconContainer: {
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
    marginRight: 16,
  },
});

export default SettingsScreen;
