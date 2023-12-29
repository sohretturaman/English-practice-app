/** @format */

import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Modal from "react-native-modal";
import Colors from "../../contants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const BottomSheetComp = ({ isModalVisible, toggleModal }) => {
  return (
    <View style={styles.container}>
      <Modal
        isVisible={isModalVisible}
        style={styles.bottomModal}
        onBackdropPress={toggleModal}
        swipeDirection={["down"]}
        onSwipeComplete={toggleModal}
      >
        <View style={styles.modalContent}>
          <View style={styles.sheetTextWrapper}>
            <Text style={styles.text}>Change The Profile Picture</Text>
          </View>

          <View style={styles.sheetBottomsWrapper}>
            <Pressable
              style={({ pressed }) => [
                styles.icon,
                {
                  backgroundColor: pressed
                    ? Colors.darkGreen
                    : Colors.lightGreen,
                },
              ]}
            >
              <MaterialCommunityIcons
                name="camera"
                size={30}
                color={Colors.secondary}
              />
              <Text style={styles.iconText}>Camera</Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.icon,
                {
                  backgroundColor: pressed
                    ? Colors.darkGreen
                    : Colors.lightGreen,
                },
              ]}
            >
              <MaterialCommunityIcons
                name="image"
                size={30}
                color={Colors.secondary}
                style={{ paddingBottom: 5 }}
              />
              <Text style={styles.iconText}>Gallery</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                styles.icon,
                {
                  backgroundColor: pressed
                    ? Colors.darkGreen
                    : Colors.lightGreen,
                },
              ]}
            >
              <MaterialCommunityIcons
                name="trash-can"
                size={30}
                color={Colors.secondary}
                style={{ paddingBottom: 5 }}
              />
              <Text style={styles.iconText}>Remove</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default BottomSheetComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: Colors.white,
    padding: 22,
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: "rgba(0, 0, 0, 0.1)",
    height: 200,
  },
  sheetBottomsWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingTop: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 10,
    color: Colors.secondary,
  },
  sheetTextWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 5,
  },
  icon: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  iconText: {
    color: Colors.secondary,
    fontWeight: "500",
    fontSize: 15,
    marginTop: 5,
  },
});
