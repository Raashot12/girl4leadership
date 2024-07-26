/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit';
import navReducer from './features/nav/navSlice';
import { baseApi as api } from './services/baseApi';
import cartSliceFunc from './features/cartItem/cartSlice';

const store = configureStore({
  reducer: {
    nav: navReducer,
    cartItem: cartSliceFunc,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
