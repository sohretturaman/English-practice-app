/** @format */

// store.js

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { ThemeReducer, TasksReducer, ImagePickerReducer } from "./Reducers";
import { NotesReducer } from "./NotesSlice";


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
