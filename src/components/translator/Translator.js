/** @format */

import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import TranslatorHeader from "./TranslatorHeader";

export default function Translator({ selectedLang, langKey, mode }) {
  const [translateFrom, setTranslateFrom] = useState("English");
  const [translateTo, setTranslateTo] = useState("Turkish");

  useEffect(() => {
    if (mode === "from") {
      setTranslateFrom(selectedLang);
    } else {
      setTranslateTo(selectedLang);
    }
  }, [selectedLang, mode]);

  return (
    <View>
      <TranslatorHeader
        selectedLang={selectedLang}
        translateFrom={translateFrom}
        translateTo={translateTo}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
