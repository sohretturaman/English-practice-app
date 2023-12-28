/** @format */

import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Switch } from "react-native-paper";
import SettingsItemComp from "./SettingsItemComp";
import Colors from "../../contants/Colors";

const SettingsContext = () => {
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
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.title}>Account</Text>
        <SettingsItemComp
          icon={"account-edit-outline"}
          title={"Edit Profile"}
          secondIcon={"chevron-right"}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={styles.title}>Settings</Text>
        <SettingsItemComp
          icon={"bell-outline"}
          title={"Notifications"}
          switchItem={
            <Switch value={notificationsEnabled} onValueChange={toggleSwitch} />
          }
        />
        <SettingsItemComp
          icon={"trash-can-outline"}
          title={"Deleted Notes"}
          secondIcon={"chevron-right"}
        />
        {/* <SettingsItemComp icon={"home"} title={"Change Language"} /> */}
        <SettingsItemComp icon={"logout"} title={"Log out"} />
        <SettingsItemComp
          icon={"send-outline"}
          title={"Send Feedback"}
          secondIcon={"chevron-right"}
        />
      </View>
    </View>
  );
};
export default SettingsContext;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color: Colors.darkGray,
  },
  headerWrapper: {
    marginVertical: 10,
  },
});
