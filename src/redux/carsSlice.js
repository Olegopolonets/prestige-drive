import { createSlice } from "@reduxjs/toolkit";
import { fetchCarsThunk } from "./operations.js";
import { toast } from "react-toastify";

const initialState = {
  items: [],
  isLoading: false,
  favoriteList: [],
  //
  isLoadMore: true,
  firstLoad: true,
  modalIsOpen: false,
  clickCardId: "",
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
    changeModalOpen: (state, { payload }) => {
      state.modalIsOpen = payload;
    },
    changeClickCardId: (state, { payload }) => {
      state.clickCardId = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCarsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (payload.length < 12) {
          state.items = [...state.items, ...payload];
          state.isLoadMore = false;
        } else {
          state.items = [...state.items, ...payload];
        }
      })
      .addCase(fetchCarsThunk.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(`Failed to delete transaction: ${action.payload}`);
      });
  },
});

export const {
  addFavorite,
  deleteFavorite,
  isFirstLoad,
  changeModalOpen,
  changeClickCardId,
} = carsSlice.actions;

export default carsSlice.reducer;
