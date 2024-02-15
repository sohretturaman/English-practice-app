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
  const { setTranslateTo, setTranslateFrom, translateFrom, translateTo } =
    useTranslateContext();

  const [resultData, setResultData] = useState([]);

  const findtranslateFromKey = useMemo(() => {
    return Object.keys(SupportedLanguges).find(
      (key) => SupportedLanguges[key] === translateFrom
    );
  }, [translateFrom]);

  const findtranslateToKey = useMemo(() => {
    return Object.keys(SupportedLanguges).find(
      (key) => SupportedLanguges[key] === translateTo
    );
  }, [translateTo]);

  const handleTranslate = useCallback(
    async (textinput) => {
      /*  try {
        if (textinput.length === 0 || textinput.trim() === 0) {
          console.log(
            "text inpput is empty",
            textinput.lenghth,
            textinput.trim()
          );
          return;
        }
        const result = await translate(
          textinput,
          findtranslateToKey,
          findtranslateFromKey
        );
        result.id = uuid.v4();
        result.date = new Date();
        console.log("result in home", result);

        setResultData([result, ...resultData]);
      } catch (error) {
        console.log("error in home", error);
      } */
    },
    [findtranslateFromKey, findtranslateFromKey, selectedLang]
  );

  return (
    <View>
      <TranslatorHeader
        selectedLang={selectedLang}
        translateFromState={translateFrom}
        translateToState={translateTo}
      />
      <TranslatorInput handleTranslate={handleTranslate} />
      <HistoryComp data={resultData} />
    </View>
  );
}

const styles = StyleSheet.create({});
