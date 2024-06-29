/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartState<T> = {
  cart: T[];
  total: number;
  quantity: number;
};

const initialState: CartState<any> = {
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
    addItemToCartFunc: (state, action) => {
      state.cart = action.payload;
    },
    getTotalAmountFunc: (state) => {
      state.total = state.cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      state.quantity = state.cart.reduce((acc, item) => acc + item.quantity, 0);
    },
    toggleAmountFunc: (
      state,
      action: PayloadAction<{ id: string; toggle: 'inc' | 'dec' }>
    ) => {
      const cartItem = state.cart.find((item) => item.id === action.payload.id);
      if (cartItem) {
        if (action.payload.toggle === 'inc') {
          cartItem.amount += 1;
        }
        if (action.payload.toggle === 'dec' && cartItem.amount > 0) {
          cartItem.amount -= 1;
        }
      }
    },
    removeCartItemFunct: (state, action) => {
      return {
        ...state,
        cart: state.cart.filter((cartremove) => {
          return cartremove.id !== action.payload.id;
        }),
      };
    },
  },
});

export const { clearCartFunc, addItemToCartFunc } = cartSlice.actions;

export default cartSlice.reducer;
