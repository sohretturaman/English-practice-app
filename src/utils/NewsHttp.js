/** @format */

import { create } from "apisauce";

import { NEWS_API } from "@env";

const api = create({
  baseURL: "https://newsapi.org/v2/",
});

export const GetNewsHeadlines = async () => {
  const result = await api.get(`/top-headlines?country=us&apiKey=${NEWS_API}`);
  return result;
};

export const getByCategory = async (category) => {
  const response = await api.get(
    `/everything?q=${category}&apiKey=${NEWS_API}`
  );
  return response;
};
