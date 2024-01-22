import { createSlice } from "@reduxjs/toolkit";
import { fetchCarsThunk } from "./operations.js";

const initialState = {
  items: [],
  isLoading: false,
  favoriteList: [],
  firstLoad: true,
};

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    addFavorite: (state, { payload }) => {
      state.favoriteList.push(payload);
    },
    deleteFavorite: (state, { payload }) => {
      state.favoriteList = state.favoriteList.filter(
        (car) => car.id !== payload
      );
    },
    isFirstLoad: (state, { payload }) => {
      state.firstLoad = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCarsThunk.fulfilled, (state, { payload }) => {
      state.items = [...state.items, ...payload];
      state.isLoading = false;
    });
  },
});

export const { addFavorite, deleteFavorite, isFirstLoad } = carsSlice.actions;

export default carsSlice.reducer;
