import { createAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  completedTasks: []
};

export const createTask = createAction('todo/createTask', (newTask) => {
  console.log("ran action",newTask)
  return {
    payload: {
      newTask: newTask
    }
  };
});

export const deleteTask = createAction('todo/deleteTask', (index) => {
  return {
    payload: {
      index: index
    }
  };
});

export const completeTask = createAction('todo/completeTask', (index) => {
  return {
    payload: {
      index: index
    }
  };
});

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    // Use the action creators defined above in your reducers
    createTask: (state, action) => {
      console.log("ran", action.payload)
      state.tasks.push(action.payload.newTask);
    },
    deleteTask: (state, action) => {
      state.tasks.splice(action.payload.index, 1);
    },
    completeTask: (state, action) => {
      state.completedTasks.push(state.tasks[action.payload.index]);
      state.tasks.splice(action.payload.index, 1);
    }
  }
});

export default todoSlice.reducer;
