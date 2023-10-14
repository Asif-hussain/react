import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './pokemonSlice';
import historyReducer from './historySlice';

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    history: historyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
