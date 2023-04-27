import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   page: 1,
};

export const paginationSlice = createSlice({
   name: "page",
   initialState,
   reducers: {
      nextPage: (state) => {
         state.page += 1;
      },
      prevPage: (state) => {
         state.page -= 1;
      },
      goToPage: (state, action) => {
         state.page = action.payload;
      },
   },
});

// Action creators are generated for each case reducer function
export const { nextPage, prevPage, goToPage } = paginationSlice.actions;

export default paginationSlice.reducer;
