/** @format */

import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

//theme slice

const ThemeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkTheme: false,
  },
  reducers: {
    changeTheme: (state, action) => {
      try {
        AsyncStorage.setItem("savedTheme", JSON.stringify(action.payload));
        state.isDarkTheme = action.payload; // change the theme by incoming value !!
      } catch (error) {
        console.log("an error occured while saving theme");
      }
    },
  },
});

export const { changeTheme } = ThemeSlice.actions;
export const ThemeReducer = ThemeSlice.reducer;

//Note slice

const NotesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
  },
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload); // no need to return
    },
    deleteNote: (state, action) => {
      state.notes.filter((note) => note.id !== action.payload);
    },
    editNote: (state, action) => {
      const { id, ...updatedNote } = action.payload; // spread operator
      const index = state.notes.findIndex(
        (note) => note.id === action.payload.id
      );
      if (index !== -1) {
        const newNotes = state.notes;
        state.notes[index] = { ...newNotes[index], ...updatedNote }; // merge them
      }
    },
  },
});

export const { addNote, deleteNote, editNote } = NotesSlice.actions;
export const NotesReducer = NotesSlice.reducer;

// tasks slice

const TasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },

    deleteTask: (state, action) => {
      state.tasks.filter((task) => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const updatableTaskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      const updatableTask = state.tasks[updatableTaskIndex];
      const updatedItem = { ...updatableTask, ...action.payload.task };
      const updatedTasks = [...state.tasks];
      updatedTasks[updatableTaskIndex] = updatedItem;
      return updatedTasks;
    },
  },
});

export const { addTask, deleteTask, editTask } = TasksSlice.actions;
export const TasksReducer = TasksSlice.reducer;
