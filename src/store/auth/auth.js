import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false
  },
  reducers: {
    login: (state, action) => {
      state.isAuth = true
    },
    logout: (state, action) => {
      state.isAuth = false;
    }
  }
})

export const {login, logout} = auth.actions;

export default auth.reducer
