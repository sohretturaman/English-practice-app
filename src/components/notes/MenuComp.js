/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Menu, Divider, PaperProvider } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../contants/Colors";

const MenuComp = () => {
  const [visible, setVisible] = React.useState(true);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <MaterialCommunityIcons
              name="dots-vertical"
              size={25}
              onPress={openMenu}
              color={"white"}
            />
          }
          contentStyle={{ backgroundColor: "#f6f6f6" }}
        >
          <Menu.Item
            onPress={() => {}}
            title="Delete"
            titleStyle={{
              color: Colors.secondary,
              fontWeight: "bold",
              fontSize: 15,
            }}
          />
          <Divider />
          <Menu.Item
            onPress={() => {}}
            title="Record Voice"
            titleStyle={{
              color: Colors.secondary,
              fontWeight: "bold",
              fontSize: 15,
            }}
          />
          <Divider />
          <Menu.Item
            onPress={() => {}}
            title="Galeri"
            titleStyle={{
              color: Colors.secondary,
              fontWeight: "bold",
              fontSize: 15,
            }}
          />
          <Divider />
          <Menu.Item
            onPress={() => {}}
            title="Textsize"
            titleStyle={{
              color: Colors.secondary,
              fontWeight: "bold",
              fontSize: 15,
            }}
          />
          <Divider />
          <Menu.Item
            onPress={() => {}}
            title="List"
            titleStyle={{
              color: Colors.secondary,
              fontWeight: "bold",
              fontSize: 15,
            }}
          />
        </Menu>
      </View>
    </View>
  );
};

export default MenuComp;

const styles = StyleSheet.create({});
