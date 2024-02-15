/** @format */

// Create a context to hold the global state
import React, { createContext, useContext, useReducer } from "react";

const AppContext = createContext({
  historyData: [],
  favedData: [],
  translateFrom: "English",
  translateTo: "Turkish",
  setTranslateFrom: () => {},
  setTranslateTo: () => {},
  saveFaved: () => {},
  saveHistory: () => {},
});

// Define actions to update the global state
const actionTypes = {
  UPDATE_TRANSLATE_FROM: "UPDATE_TRANSLATE_FROM",
  UPDATE_TRANSLATE_TO: "UPDATE_TRANSLATE_TO",
  ADD_HISTORY_DATA: "ADD_HISTORY_DATA",
  ADD_FAVED_DATA: "ADD_FAVED_DATA",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_TRANSLATE_FROM:
      return { ...state, translateFrom: action.payload };

    case actionTypes.UPDATE_TRANSLATE_TO:
      return { ...state, translateTo: action.payload };

    case actionTypes.ADD_HISTORY_DATA:
      return { ...state, historyData: [...state.historyData, action.payload] };

    case actionTypes.ADD_FAVED_DATA:
      return { ...state, favedData: [...state.favedData, action.payload] };

    case actionTypes.default:
      return state;
  }
};

// Context provider to manage global state
export const AppContextProvider = ({ children }) => {
  const initialState = {
    historyData: [],
    favedData: [],
    translateFrom: "English", // Default value for translateFrom
    translateTo: "Turkish", // Default value for translateTo
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  function setTranslateTo(language) {
    dispatch({ type: actionTypes.UPDATE_TRANSLATE_TO, payload: language });
  }

  function setTranslateFrom(language) {
    dispatch({ type: actionTypes.UPDATE_TRANSLATE_FROM, payload: language });
  }
  function saveHistory(historyData) {
    dispatch({ type: actionTypes.ADD_HISTORY_DATA, payload: historyData });
  }
  function saveFaved(favedItem) {
    const isAlreadyFaved = state.favedData.some(
      (item) => item.id === favedItem.id
    );
    if (isAlreadyFaved) {
      // Remove the item from the favorites list
      const updatedFavedData = state.favedData.filter(
        (item) => item.id !== favedItem.id
      );
      dispatch({ type: actionTypes.ADD_FAVED_DATA, payload: updatedFavedData });
    } else {
      // Add the item to the favorites list
      dispatch({
        type: actionTypes.ADD_FAVED_DATA,
        payload: [...state.favedData, favedItem],
      });
    }
  }

  const value = {
    translateTo: state.translateTo,
    translateFrom: state.translateFrom,
    historyData: state.historyData,
    favedData: state.favedData,
    setTranslateFrom: setTranslateFrom,
    setTranslateTo: setTranslateTo,
    saveHistory: saveHistory,
    saveFaved: saveFaved,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook to access the global state and dispatch actions
export const useTranslateContext = () => useContext(AppContext);
