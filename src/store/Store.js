/** @format */

// store.js

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { ThemeReducer, NotesReducer, TasksReducer, ImagePickerReducer } from "./Reducers";


// Configure the store
const store = configureStore({
  reducer: {
    theme: ThemeReducer,
    notes: NotesReducer,
    tasks: TasksReducer,
    imagePicker:ImagePickerReducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
