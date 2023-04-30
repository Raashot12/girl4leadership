import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

type NavState = {
  activePath: string;
  maximised: boolean;
};

const initialState = {
  activePath: '/',
  maximised: false,
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
  },
});

export const { setActivePath, setMaximised, toggleMaximised } =
  navSlice.actions;

export const selectActivePath = (state: RootState): string =>
  state.nav.activePath;

export const selectMaximised = (state: RootState): boolean =>
  state.nav.maximised;

export default navSlice.reducer;
