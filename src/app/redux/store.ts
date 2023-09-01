import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./createSlices";

export default configureStore({
  reducer: {
    basket: basketSlice,
  },
});
