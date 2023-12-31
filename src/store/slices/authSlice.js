import { createSlice } from '@reduxjs/toolkit';
import { login, register } from '../../util/auth';
import {
  getItemFromLocalStorage,
  setItemToLocalStorage,
} from '../../util/storage';

const initialState = {
  user: getItemFromLocalStorage('user'),
  status: getItemFromLocalStorage('status'),
  error: null,
  success: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      // register({ ...action.payload })
      const user = register({ ...action.payload });
      console.log('setUser-reducer>>', user);
      // if (user) {
      //   state.status = 'success';
      //   setItemToLocalStorage('status', state.status);
      // }
    },
    loginRequest: (state, action) => {
      const { user, error } = login({ ...action.payload });

      if (user) {
        state.user = user;
        state.status = 'success';
        setItemToLocalStorage('user', state.user);
      }

      if (error?.success === false) {
        state.error = error.message;
      }
    },
  },
});

export const { setUser, loginRequest } = authSlice.actions;
export default authSlice.reducer;
