import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../firebase";

const AUTH_INITIAL_STATE = {
  isAuthenticated: false,
  user: {},
  status: "idle",
};

export const signInWithEmailAndPassword = createAsyncThunk(
  "todos/login",
  async ({ email, password }) => {
    const response = await auth.signInWithEmailAndPassword(email, password);
    const date = new Date();
    localStorage.setItem("X-token", `${response.user.email}${date}`);
    return response.user;
  }
);

export const authSlice = createSlice({
  name: "login",
  initialState: AUTH_INITIAL_STATE,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = {};
      state.status = "idle";
    },
  },
  extraReducers: {
    [signInWithEmailAndPassword.pending]: (state, action) => {
      state.status = "loading";
    },
    [signInWithEmailAndPassword.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    [signInWithEmailAndPassword.rejected]: (state, action) => {
      state.status = "rejected";
      state.isAuthenticated = false;
    },
  },
});
console.log(authSlice);
export const selectUser = (state) => state.auth.user;
export const selectStatus = (state) => state.auth.status;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const { logout } = authSlice.actions;

export default authSlice.reducer;
