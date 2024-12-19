import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Layout from "./features/layoutSlice";
import Users from "./features/userSlice";
export const store = configureStore({
  reducer: combineReducers({
    layout: Layout,
    users: Users,
  }),
});
