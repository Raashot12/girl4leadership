import { configureStore } from '@reduxjs/toolkit';
import navReducer from './features/nav/navSlice';
import { tokenAuthApi } from './services/tokenAuthApi';

const store = configureStore({
  reducer: {
    nav: navReducer,
    [tokenAuthApi.reducerPath]: tokenAuthApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenAuthApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
