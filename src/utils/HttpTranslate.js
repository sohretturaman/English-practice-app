/** @format */

import axios from "axios";
import { TRANSLATE_API_KEY } from "@env";

export const translate = async (text, to, from) => {
  const options = {
    method: "GET",
    url: "https://nlp-translation.p.rapidapi.com/v1/translate",
    params: {
      text: text,
      to: to,
      from: from,
    },
    headers: {
      "X-RapidAPI-Key": TRANSLATE_API_KEY, //dont use curly bracket ,couse it is not gonna work(throws 403 error)
      "X-RapidAPI-Host": "nlp-translation.p.rapidapi.com",
    },
  };

  const response = await axios.request(options).catch((err) => {
    console.log("an error occures ", err);
  });

  if (response.status !== 200) {
    throw new Error("status code is not 200");
  }

  return response.data;
};
