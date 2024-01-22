import { configureStore } from '@reduxjs/toolkit';
import navReducer from './features/nav/navSlice';
import { baseApi as api } from './services/baseApi';

const store = configureStore({
  reducer: {
    nav: navReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
