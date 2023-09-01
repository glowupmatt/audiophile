import { createSlice } from "@reduxjs/toolkit";

export type initialStateType = {
  basket: {
    name: string;
    price: string;
    image: string;
    amount: number;
  }[];
};

const initialState: initialStateType = {
  basket: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.basket.push(action.payload);
    },
  },
});

export const { addToBasket } = basketSlice.actions;
export default basketSlice.reducer;
