import { createSlice } from "@reduxjs/toolkit";
import { fetchCarsThunk } from "./operations.js";
import { toast } from "react-toastify";

const initialState = {
  items: [],
  isLoading: false,
  favoriteList: [],
  isLoadMore: true,
  firstLoad: true,
  modalIsOpen: false,
  clickCardId: "",
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
      toast.warning(`The car has been removed to the "Favorites"!`);
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
    changeFirstLoad: (state, { payload }) => {
      state.firstLoad = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCarsThunk.fulfilled, (state, { payload }) => {
        if (payload.length < 12) {
          state.items = [...state.items, ...payload];
          state.isLoadMore = false;
          state.isLoading = false;
        } else {
          state.items = [...state.items, ...payload];
          state.isLoading = false;
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
  changeModalOpen,
  changeClickCardId,
  changeSelectFilter,
  changeFilters,
  changeFirstLoad,
} = carsSlice.actions;

export default carsSlice.reducer;
