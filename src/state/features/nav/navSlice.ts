import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

type NavState = {
  activePath: string;
  maximised: boolean;
  showCart: boolean;
};

const initialState = {
  activePath: '/',
  maximised: false,
  showCart: false,
} as NavState;

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setActivePath: (state, action) => {
      state.activePath = action.payload;
    },
    setMaximised: (state, action) => {
      state.maximised = action.payload;
    },
    toggleMaximised: (state) => {
      state.maximised = !state.maximised;
    },
    toggleShowCart: (state, action: PayloadAction<{ showCart: boolean }>) => {
      state.showCart = action.payload.showCart;
    },
  },
});

export const { setActivePath, setMaximised, toggleMaximised, toggleShowCart } =
  navSlice.actions;

export const selectActivePath = (state: RootState): string =>
  state.nav.activePath;

export const selectMaximised = (state: RootState): boolean =>
  state.nav.maximised;
export const selectShowCart = (state: RootState): boolean => state.nav.showCart;

export default navSlice.reducer;
