import { createSlice } from "@reduxjs/toolkit";
import { fetchCarsThunk } from "./operations.js";

const initialState = {
  items: [],
  isLoading: false,
};

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  //   reducers: {
  //     setFilter: (state, { payload }) => {
  //       state.filter = payload;
  //     },
  //   },
  extraReducers: (builder) => {
    builder.addCase(fetchCarsThunk.fulfilled, (state, { payload }) => {
      state.items = [...state.items, ...payload];
      state.isLoading = false;
    });
  },
});

export default carsSlice.reducer;
