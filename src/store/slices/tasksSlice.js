import { createSlice } from '@reduxjs/toolkit';
import { findFromStorage, getItemFromLocalStorage } from '../../util/storage';
import {  postTaskToDB } from '../../util/taskController';

const initialState = {
  task: getItemFromLocalStorage('task'),
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createTask: (state, action) => {
      const task = postTaskToDB({ ...action.payload });
    },
    addToTask: (state, action) => {
      // const task = postTasks({ ...action.payload });

      // if (task?.created) {
      //   const tasks = findFromStorage('tasks');
      //   const findTask =tasks.filter(task => task.)
      // }


    },
    getTask: (state, action) => {

    },
    updateTask: (state, action) => { },
    deleteTask: (state, action) => {}
  },
});

export const {updateTask, deleteTask, addToTask, createTask, getTask } = tasksSlice.actions;
export default tasksSlice.reducer;
