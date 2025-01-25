import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./slices/languegeSlice";
import translateReducer from "./slices/translateSlice";

const store = configureStore({
  reducer: {
    languageReducer,
    translateReducer,
  },
});

export default store;
