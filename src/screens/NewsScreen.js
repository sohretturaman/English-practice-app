/** @format */

import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Colors from "../contants/Colors";
import AddTime from "../components/tasks/AddTime";
import MyModal from "../components/tasks/MyModal";
import { TextInput } from "react-native-paper";

const NewsScreen = () => {
  const darkMode = useSelector((selector) => selector.theme.isDarkTheme);
  const [openModal, setOpanModal] = useState(false);
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView
          style={[
            styles.container,
            { backgroundColor: darkMode ? Colors.black : Colors.background },
          ]}
        >
          <Text>NewsScreen</Text>
          <TextInput placeholder="Title" />
          <Pressable onPress={() => setOpanModal(true)}>
            <Text> open modal</Text>
          </Pressable>
          <MyModal
            isOpen={openModal}
            onRequestClose={() => setOpanModal(false)}
          />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
