import { createSlice } from '@reduxjs/toolkit';
import {
  getItemFromLocalStorage,
  setItemToLocalStorage,
} from '../../util/storage';
import {
  deleteTaskFromDB,
  getTaskFromDB,
  postTaskToDB,
} from '../../util/taskController';

const initialState = {
  task: getItemFromLocalStorage('task'),
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createTask: (state, action) => {
      console.log(action.payload);
      postTaskToDB({ ...action.payload.task });

      const task = getTaskFromDB(action.payload.userId);

      if (task) {
        state.task = task;
      }

      setItemToLocalStorage('task', state.task);
    },
   
    getTask: (state, action) => {
      console.log(action.payload.userId);
      const task = getTaskFromDB(action.payload.userId);

      if (task) {
        state.task = task;
      }

      setItemToLocalStorage('task', state.task);
    },
    updateTask: (state, action) => {
      const updatedTask = action.payload.updatedTask;
      console.log('reducer', updatedTask)
      const updated = state.task.map(task => {
        return task.id === updatedTask.id ? updatedTask : task;
      })

      state.task = updated;

      setItemToLocalStorage('task', state.task);

    },
    deleteTask: (state, action) => {
      const task = state.task.filter((tsk) => tsk.id !== action.payload.taskId);
      state.task = task;
      setItemToLocalStorage('task', state.task);

      deleteTaskFromDB(action.payload.taskId);
    },
  },
});

export const { updateTask, deleteTask, addToTask, createTask, getTask } =
  tasksSlice.actions;
export default tasksSlice.reducer;
