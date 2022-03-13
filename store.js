import { configureStore, combineReducers } from "@reduxjs/toolkit";
import navigation from "./slices/navSlice";

const store = configureStore({
  reducer: {
    navigation,
  },
});

export default store;
