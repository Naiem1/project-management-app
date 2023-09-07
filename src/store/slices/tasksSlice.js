import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addToTask: (state, action) => {},
    updateTask: (state, action) => { },
    deleteTask: (state, action) => {}
  },
});

export const { addToTask0, updateTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
