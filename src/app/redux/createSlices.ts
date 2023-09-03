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
      const productToAdd = action.payload;
      const existingProduct = state.basket.find(
        (item) => item.name === productToAdd.name
      );
      if (existingProduct) {
        existingProduct.amount += productToAdd.amount;
      } else {
        state.basket.push(productToAdd);
      }
    },
    addAmount: (state, action) => {
      const addOneToProduct = action.payload;
      state.basket.map((item) => {
        if (item.name === addOneToProduct.name) {
          item.amount += 1;
        }
      });
    },
    removeOne: (state, action) => {
      const removeOneFromProduct = action.payload;
      state.basket.map((item) => {
        if (item.name === removeOneFromProduct.name) {
          item.amount -= 1;
        }
      });
    },
    removeAll: (state, action) => {
      if (state.basket.length > 0) {
        state.basket = [];
      }
    },
  },
});

export const { addToBasket, addAmount, removeOne, removeAll } =
  basketSlice.actions;
export default basketSlice.reducer;
