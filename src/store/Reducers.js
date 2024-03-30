/** @format */

import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, nanoid } from "@reduxjs/toolkit";

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

const ImagePickerSlice= createSlice({
  name: "imagePicker",
  initialState: {
    pickerStatus: false,
    backButtonState :false
  },
  reducers: {
    changeStatus: (state, action) => {
       console.log('action .playload image picker ? 1 ', action.payload)
       state.pickerStatus = !action.payload; // change the theme by incoming value !!
       console.log('steate.pickerStatus?2 ', state.pickerStatus)

      
  } ,
  changeBackButtonState: (state, action) => {
    console.log('action .playload back button state ? 1 ', state.backButtonState)
    state.pickerStatus = !action.payload; // change the theme by incoming value !!
    console.log('steate. back button state?2 ', state.backButtonState)

   
}

}
});

export const {changeStatus ,changeBackButtonState} = ImagePickerSlice.actions;
export const ImagePickerReducer = ImagePickerSlice.reducer;
//Note slice

const NotesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
  },
  reducers: {
    addNote: (state, action) => {
      
      var note = action.payload;
      note.id = nanoid();
      state.notes.push(note); // no need to return
    },

    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    editNote: (state, action) => {
      const { id, newNote } = action.payload; // spread operator
      const index = state.notes.findIndex((note) => note.id === id);

      if (index !== -1) {
        state.notes[index] = { ...state.notes[index], ...newNote };
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
      const task = action.payload;
      task.id = nanoid();
      state.tasks.push(task);
    },

    deleteTask: (state, action) => {
      state.tasks.filter((task) => task.id !== action.payload);
    },
    completeTask: (state, action) => {
      const updatableTaskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload
      );
      console.log("updatableTaskIndex", updatableTaskIndex);
      const updatableTask = state.tasks[updatableTaskIndex];
      const updatedItem = { ...updatableTask, isDone: !updatableTask.isDone };
      console.log("updated item", updatedItem);
      state.tasks[updatableTaskIndex] = updatedItem;
    },
    editTask: (state, action) => {
      const { id, task, date, subtasks } = action.payload;
      const updatedTaskIndex = state.tasks.findIndex((task) => task.id === id);
      if (updatedTaskIndex !== -1) {
        const updatedTask = {
          ...state.tasks[updatedTaskIndex],
          task: task,
          subtasks: subtasks,
          date: date,
        };
        state.tasks[updatedTaskIndex] = updatedTask;
      }
    },

    editSubTask: (state, action) => {
      const { id, date, subtaskId, subtask } = action.payload;
      console.log("action.payload in edit subtask", action.payload);
      const updatableTaskIndex = state.tasks.findIndex(
        (task) => task.id === id
      );
      const updatableTask = state.tasks[updatableTaskIndex];
      const subtaskIndex = updatableTask.subTasks.find(
        (subtask) => subtask.id === subtaskId
      );
      const updatableSubtask = updatableTask.subTasks[subtaskIndex];
      const updatedSubtask = { ...updatableSubtask, subtask: subtask }; // updated the subtask
      const updatedSubtasksList = (state.tasks[updatableTaskIndex].subTasks[
        subtaskIndex
      ] = updatedSubtask);
      state.tasks[updatableTaskIndex] = {
        ...updatableTask,
        subTasks: updatedSubtasksList,
        date: date,
      };
    },
    completeSubtask: (state, action) => {
      const { id, subtaskId } = action.payload;
      const updatableTaskIndex = state.tasks.findIndex(
        (task) => task.id === id
      );
      if (updatableTaskIndex === -1) {
        console.warn("Task not found");
        return;
      }

      const updatableTask = state.tasks[updatableTaskIndex];
      const subtaskIndex = updatableTask.subtasks.findIndex(
        (subtask) => subtask.id === subtaskId
      );
      if (subtaskIndex === -1) {
        console.warn("Subtask not found");
        return;
      }

      const updatedSubtasks = [...updatableTask.subtasks]; 
      updatedSubtasks[subtaskIndex] = {
        ...updatedSubtasks[subtaskIndex],
        isDone: !updatedSubtasks[subtaskIndex].isDone,
      };

      const updatedTask = {
        ...updatableTask,
        subtasks: updatedSubtasks,
        date: new Date().toISOString(),
      };
      console.log("updated task in complete subtask", updatedTask);
      state.tasks[updatableTaskIndex] = updatedTask;
    },

    deleteSubtask: (state, action) => {
      const { id, subtaskId } = action.payload;
      const updatableTaskIndex = state.tasks.findIndex(
        (task) => task.id === id
      );
      const updatableTask = state.tasks[updatableTaskIndex];
      const updatedSubtasks = updatableTask.subTasks.filter(
        (subtask) => subtask.id !== subtaskId
      );
      state.tasks[updatableTaskIndex] = {
        ...updatableTask,
        subTasks: updatedSubtasks,
        date: new Date().toISOString(),
      };
    },
  },
});

export const {
  addTask,
  deleteTask,
  editTask,
  completeTask,
  completeSubtask,
  deleteSubtask,
  editSubTask,
} = TasksSlice.actions;
export const TasksReducer = TasksSlice.reducer;
/* 
const SavedNewsSlice = createSlice({
  name: "savedNews",
  initialState: {
    savedNews: [],
  },
  reducers: {
    addSavedNews: (state, action) => {
      const id = Math.random().toString + new Date().toString(); //added an id for each news
      const news = { ...action.payload, id: id };
      console.log("news object in addSavedNews", news);
      state.savedNews.push(news);
    },
    deleteSavedNews: (state, action) => {
      state.savedNews.filter((news) => news.id !== action.payload);
    },
  },
});

export const { addSavedNews, deleteSavedNews } = SavedNewsSlice.actions;
export const SavedNewsReducer = SavedNewsSlice.reducer;
 */
