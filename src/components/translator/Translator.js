/** @format */

import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import TranslatorHeader from "./TranslatorHeader";
import TranslatorInput from "./TranslatorInput";
import HistoryComp from "./HistoryComp";

export default function Translator({ selectedLang, langKey, mode }) {
  const [translateFrom, setTranslateFrom] = useState("English");
  const [translateTo, setTranslateTo] = useState("Turkish");

  useEffect(() => {
    if (mode === "from") {
      setTranslateFrom(selectedLang);
    }
    if (mode === "to") {
      setTranslateTo(selectedLang);
    }
  }, [selectedLang, mode]);

  console.log("tranlate to ", translateTo);

  return (
    <View>
      <TranslatorHeader
        selectedLang={selectedLang}
        translateFrom={translateFrom}
        translateTo={translateTo}
      />
      <TranslatorInput />
      <HistoryComp />
    </View>
  );
}

const styles = StyleSheet.create({});
