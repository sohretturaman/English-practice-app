/** @format */

import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import TranslatorHeader from "./TranslatorHeader";
import TranslatorInput from "./TranslatorInput";
import HistoryComp from "./HistoryComp";
import { translate } from "../../utils/HttpTranslate";
import SupportedLanguges from "../../utils/SupportedLanguges";

export default function Translator({ selectedLang, mode }) {
  const [translateFrom, setTranslateFrom] = useState("English");
  const [translateTo, setTranslateTo] = useState("Turkish");
  const [resultData, setResultData] = useState([]);

  const findTranslateToKey = Object.keys(SupportedLanguges).find(
    (key) => SupportedLanguges[key] === translateTo
  );
  const findTranslateFromKey = Object.keys(SupportedLanguges).find(
    (key) => SupportedLanguges[key] === translateFrom
  );

  useEffect(() => {
    if (mode === "from") {
      setTranslateFrom(selectedLang);
    }
    if (mode === "to") {
      setTranslateTo(selectedLang);
    }
  }, [selectedLang, mode]);

  const handleTranslate = useCallback(
    async (textinput) => {
      try {
        const result = await translate(
          textinput,
          findTranslateToKey,
          findTranslateFromKey
        );
        console.log("result in home", result);
        setResultData([result, ...resultData]);
      } catch (error) {
        console.log("error in home", error);
      }
    },
    [findTranslateFromKey, findTranslateFromKey, resultData]
  );

  return (
    <View>
      <TranslatorHeader
        selectedLang={selectedLang}
        translateFrom={translateFrom}
        translateTo={translateTo}
      />
      <TranslatorInput handleTranslate={handleTranslate} />
      <HistoryComp data={resultData} />
    </View>
  );
}

const styles = StyleSheet.create({});
