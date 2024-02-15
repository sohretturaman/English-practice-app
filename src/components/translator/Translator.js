/** @format */

import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import TranslatorHeader from "./TranslatorHeader";
import TranslatorInput from "./TranslatorInput";
import HistoryComp from "./HistoryComp";
import { translate } from "../../utils/HttpTranslate";
import SupportedLanguges from "../../utils/SupportedLanguges";
import uuid from "react-native-uuid";
import { useTranslateContext } from "../../store/SelectLangContext";

export default function Translator() {
  const { saveHistory, translateFrom, translateTo } = useTranslateContext();

  const [resultData, setResultData] = useState([]);
  const [translatedText, setTranslatedText] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, [translatedText, loading]);

  const findtranslateFromKey = Object.keys(SupportedLanguges).find(
    (key) => SupportedLanguges[key] === translateFrom
  );

  const findtranslateToKey = Object.keys(SupportedLanguges).find(
    (key) => SupportedLanguges[key] === translateTo
  );

  const handleTranslate = useCallback(
    async (textinput) => {
      try {
        setLoading(true);
        const result = await translate(
          textinput,
          findtranslateToKey,
          findtranslateFromKey
        );
        result.id = uuid.v4();
        result.date = new Date();
        console.log("is loading value", loading);

        console.log("translated Text", result.translated_text[result.to]);
        setTranslatedText(result.translated_text[result.to]);
        saveHistory(result);
      } catch (error) {
        console.log("error in home", error);
      } finally {
        setLoading(false);
      }
    },
    [
      findtranslateFromKey,
      findtranslateFromKey,
      resultData,
      translateFrom,
      translateTo,
      translatedText,
    ]
  );

  return (
    <View>
      <TranslatorHeader
        translateFromState={translateFrom}
        translateToState={translateTo}
      />
      <TranslatorInput
        handleTranslate={handleTranslate}
        myText={translatedText}
        isLoading={loading}
      />
      <HistoryComp />
    </View>
  );
}

const styles = StyleSheet.create({});
