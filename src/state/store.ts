/* eslint-disable import/no-cycle */
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import navReducer from './features/nav/navSlice';
import { baseApi as api } from './services/baseApi';
import cartSliceFunc from './features/cartItem/cartSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartItem'], // Use the correct key name
};

const rootReducer = combineReducers({
  nav: navReducer,
  cartItem: cartSliceFunc, // Make sure the key matches here
  [api.reducerPath]: api.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

const persistor = persistStore(store);

export { store, persistor };
