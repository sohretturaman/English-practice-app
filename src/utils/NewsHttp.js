/** @format */

import { create } from "apisauce";

const API_KEY = "1e7f18a6c5c64f2082a053a799b8c160";

const api = create({
  baseURL: "https://newsapi.org/v2/",
});

export const GetNewsHeadlines = async () => {
  const result = await api.get(`/top-headlines?country=us&apiKey=${API_KEY}`);
  return result;
};
// https://newsapi.org/v2/top-headlines?country=us&apiKey=1e7f18a6c5c64f2082a053a799b8c160

//https://newsapi.org/v2/everything?q=apple&from=2023-12-26&to=2023-12-26&sortBy=popularity&apiKey=1e7f18a6c5c64f2082a053a799b8c160
