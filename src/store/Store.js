/** @format */

// store.js

import { configureStore } from "@reduxjs/toolkit";
import { ThemeReducer, NotesReducer, TasksReducer } from "./Reducers";

// Configure the store
const store = configureStore({
  reducer: {
    theme: ThemeReducer,
    notes: NotesReducer,
    tasks: TasksReducer,
  },
});

export default store;
