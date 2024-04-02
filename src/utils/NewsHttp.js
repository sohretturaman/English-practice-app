/** @format */

import { create } from "apisauce";

const API_KEY = "1e7f18a6c5c64f2082a053a799b8c160";
import {NEWS_API} from '@env';

const api = create({
  baseURL: "https://newsapi.org/v2/",
});

export const GetNewsHeadlines = async () => {
  const result = await api.get(`/top-headlines?country=us&apiKey=${API_KEY}`);
  return result;
};

export const getByCategory = async (category) => {
  const response = await api.get(`/everything?q=${category}&apiKey=${API_KEY}`);
  return response;
};

