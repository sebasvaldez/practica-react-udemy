import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated", // checking,authenticated, not-authenticated
    uid: null,
    email: null,
    displayName: null,
    photoUrl: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, action) => {},
    logout: (state, payload) => {},
    checkingCredentials: (state) => {
        state.status='checikng'
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
