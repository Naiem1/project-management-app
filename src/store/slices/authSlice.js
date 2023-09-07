import { createSlice } from '@reduxjs/toolkit';


const initialState = [
  user: []
]


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducer: {
    setUser: (state, action) => {}
    clearUser: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(increment, (state, action) => {})
      .addCase(decrement, (state, action) => {});
  },
});


export const {setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
