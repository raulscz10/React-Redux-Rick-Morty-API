import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "../containers/CharactersList/paginationSlice";

export const store = configureStore({
   reducer: {
      pagination: paginationReducer,
   },
});
