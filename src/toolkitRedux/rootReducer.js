import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import dictionarySlice from "./dictionarySlice";

const rootReducer = combineReducers({ dictionary: dictionarySlice });

export const store = configureStore({
  reducer: rootReducer,
});
