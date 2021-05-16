import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../firebase";

export const signInWithEmailAndPassword = createAsyncThunk(
  "todos/login",
  async ({ email, password }) => {
    const response = await auth.signInWithEmailAndPassword(email, password);
    const date = new Date();
    localStorage.setItem("X-token", `${response.user.email}${date}`);
    return response.user;
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isAuthenticated: false,
    user: {},
    status: "idle",
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

export const selectUser = (state) => state.login.user;
export const selectStatus = (state) => state.login.status;

export default loginSlice.reducer;
