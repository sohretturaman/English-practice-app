/** @format */

import { createContext, useState } from "react";

export const SavedNewsContext = createContext({
  news: [],
  AddSavedNews: (data) => {},
  DelSavedNews: (id) => {},
});

const SavedNewsContextProvider = ({ children }) => {
  const [savedNews, setSavedNews] = useState([]);

  function AddSavedNews(data) {
    const id = Math.random().toString();
    const newsObject = { ...data, id: id };

    setSavedNews((currentSavedNews) => {
      return [newsObject, ...currentSavedNews];
    });
  }

  function DelSavedNews(id) {
    let newList = favMealIds.filter((news) => news.id !== id);
    setSavedNews(newList);
  }

  const myValue = {
    news: savedNews,
    AddSavedNews: AddSavedNews,
    DelSavedNews: DelSavedNews,
  };

  return (
    <SavedNewsContext.Provider value={myValue}>
      {children}
    </SavedNewsContext.Provider>
  );
};

export default SavedNewsContextProvider;
