/** @format */

import { createContext, useState } from "react";

export const SearchedVideosContext = createContext({
  searchedVideos: [],
  AddSearchedVideos: (data) => {},
});

const SearchedVideosContextProvider = ({ children }) => {
  const [searchedVideos, setSearchedVideos] = useState([]);

  function AddSearchedVideos(data) {
    setSearchedVideos((currentItems) => {
      return [...data, ...currentItems];
    });
  }

  const myValue = {
    searchedVideos: searchedVideos,
    AddSearchedVideos: AddSearchedVideos,
  };

  return (
    <SearchedVideosContext.Provider value={myValue}>
      {children}
    </SearchedVideosContext.Provider>
  );
};

export default SearchedVideosContextProvider;
