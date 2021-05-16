import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import loginReducer from "./slices/loginSlice";

export default configureStore({
  reducer: {
    login: loginReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
  devtools: process.env.NODE_ENV !== "production",
});
