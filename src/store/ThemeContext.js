/** @format */

import { createContext, useState } from "react";

export const ThemeContext = createContext({
  isDarkTheme: false,
  changeTheme: () => {},
});

const ThemeContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  function changeTheme() {
    setIsDarkTheme(!isDarkTheme);
  }

  const value = {
    isDarkTheme: isDarkTheme,
    changeTheme: changeTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children} </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
