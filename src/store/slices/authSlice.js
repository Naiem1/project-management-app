import { createSlice } from '@reduxjs/toolkit';


const initialState = [

]


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducer: {
    logout: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(increment, (state, action) => {})
      .addCase(decrement, (state, action) => {});
  },
});


export const {logout } = authSlice.actions;
export default authSlice.reducer;
