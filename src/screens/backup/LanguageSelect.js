/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SelectLangComp from "../../components/translator/SelectLangComp";
import { useRoute } from "@react-navigation/native";

const LanguageSelect = () => {
  const route = useRoute();

  return (
    <View style={styles.container}>
      <SelectLangComp
        selectMode={route.params?.mode}
        current={route.params?.current}
      />
    </View>
  );
};

export default LanguageSelect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
