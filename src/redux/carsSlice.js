import { createSlice } from "@reduxjs/toolkit";
import { fetchCarsThunk } from "./operations.js";

const initialState = {
  cars: {
    items: [],
    isLoading: false,
  },
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
      state.cars.items = payload;
      state.cars.isLoading = false;
    });
  },
});

export default carsSlice.reducer;
