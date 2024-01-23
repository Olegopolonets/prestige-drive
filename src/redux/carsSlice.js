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

  //filters
  select: "",
  filters: {},
};

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    addFavorite: (state, { payload }) => {
      state.favoriteList.push(payload);
      toast.success(
        `The ${payload.make} ${payload.model} is added to the "Favorites"!`
      );
    },
    deleteFavorite: (state, { payload }) => {
      state.favoriteList = state.favoriteList.filter(
        (car) => car.id !== payload
      );
      toast.error(`The car has been removed to the "Favorites"!`);
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
    changeSelectFilter: (state, { payload }) => {
      if (payload.length < 12) {
        state.isLoadMore = false;
        state.select = payload;
      } else {
        state.select = payload;
      }
    },
    changeFilters: (state, { payload }) => {
      state.filters = payload;
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
        toast.error(`Error loading data: ${action.payload}`);
      });
  },
});

export const {
  addFavorite,
  deleteFavorite,
  isFirstLoad,
  changeModalOpen,
  changeClickCardId,
  changeSelectFilter,
  changeFilters,
} = carsSlice.actions;

export default carsSlice.reducer;
