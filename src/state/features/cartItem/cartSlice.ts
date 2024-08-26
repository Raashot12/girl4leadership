/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Record } from 'state/services/product';
import { RootState } from 'state/store';

export type CartState<T extends Record[]> = {
  cart: T;
  total: number;
  quantity: number;
};

const initialState: CartState<Record[]> = {
  cart: [],
  total: 0,
  quantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCartFunc: (state) => {
      state.cart = [];
      state.total = 0;
      state.quantity = 0;
    },
    addItemToCartFunc: (state, action: PayloadAction<Record>) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        // Update the quantity if the item already exists in the cart
        existingItem.fields.quantity += action.payload.fields.quantity;
      } else {
        // Add the new item to the cart
        state.cart.push(action.payload);
      }
    },
    getTotalAmountFunc: (state) => {
      state.total = state.cart.reduce(
        (acc, item) =>
          acc + Number(item?.fields?.Price) * Number(item?.fields?.quantity),
        0
      );
      state.quantity = state.cart.reduce(
        (acc, item) => acc + Number(item?.fields?.quantity),
        0
      );
    },
    toggleAmountFunc: (
      state,
      action: PayloadAction<{ id: string; toggle: 'inc' | 'dec' }>
    ) => {
      const cartItem = state.cart.find((item) => item.id === action.payload.id);
      if (cartItem) {
        if (action.payload.toggle === 'inc') {
          cartItem.fields.quantity += 1;
        }
        if (action.payload.toggle === 'dec' && cartItem?.fields?.quantity > 0) {
          cartItem.fields.quantity -= 1;
        }
      }
    },
    removeCartItemFunct: (state, action: PayloadAction<{ id: string }>) => {
      state.cart = state.cart.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.total = state.cart.reduce(
        (acc, item) =>
          acc + Number(item?.fields?.Price) * Number(item?.fields?.quantity),
        0
      );
      state.quantity = state.cart.reduce(
        (acc, item) => acc + Number(item?.fields?.quantity),
        0
      );
    },
  },
});

export const {
  clearCartFunc,
  addItemToCartFunc,
  removeCartItemFunct,
  toggleAmountFunc,
} = cartSlice.actions;
export const cartState = (state: RootState): CartState<Array<Record>> =>
  state.cartItem;

export default cartSlice.reducer;
