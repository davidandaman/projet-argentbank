import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./userslice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
