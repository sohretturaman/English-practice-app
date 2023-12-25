/** @format */

// store.js

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { ThemeReducer, NotesReducer, TasksReducer } from "./Reducers";

// Configure the store
const store = configureStore({
  reducer: {
    theme: ThemeReducer,
    notes: NotesReducer,
    tasks: TasksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
