
//Note slice

import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

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
      console.log("added note in recudeer",note)
      },
  
      deleteNote: (state, action) => {
        state.notes = state.notes.filter((note) => note.id !== action.payload);
      },
      editNote: (state, action) => {//working properly
        const { id, newNote } = action.payload; // spread operator
        const index = state.notes.findIndex((note) => note.id === id);
  
        if (index !== -1) {
          state.notes[index] = { ...state.notes[index], ...newNote };
        
        }
      },
  
      completeNoteTask: (state, action) => {
        console.log('action .payload in complete note task', action.payload);
        const { noteId, taskId } = action.payload;
      
        const updatableNoteIndex = state.notes.findIndex((note) => note.id === noteId);
        if (updatableNoteIndex === -1) {
          console.warn('Note not found');
          return;
        }
      
        const updatableNote = state.notes[updatableNoteIndex];
        const noteTaskIndex = updatableNote.tasks.findIndex((task) => task.id === taskId);
        if (noteTaskIndex === -1) {
          console.warn('Task not found');
          return;
        }
      
        const updatableNoteTask = updatableNote.tasks[noteTaskIndex];
        const updatedNoteTask = { ...updatableNoteTask, isDone: !updatableNoteTask.isDone }; 
        const updatedNoteTasksList = [...updatableNote.tasks];
        updatedNoteTasksList[noteTaskIndex] = updatedNoteTask;
      
        state.notes[updatableNoteIndex] = {
          ...updatableNote,
          tasks: updatedNoteTasksList,
          date: new Date().toISOString(),
        };
      },
      
  
        deleteNoteTask: (state, action) => {
        //delete task from note 
        }
      }
    },
  
  
  );
  
  export const { addNote, deleteNote, editNote,completeNoteTask } = NotesSlice.actions;
  export const NotesReducer = NotesSlice.reducer;