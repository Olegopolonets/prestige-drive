import { configureStore } from "@reduxjs/toolkit";
import carsSlice from "./carsSlice.js";

export const store = configureStore({
  reducer: {
    cars: carsSlice,
  },
  //   devTools: process.env.NODE_ENV !== 'production',
});
