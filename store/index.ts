import { PreloadedState, configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categories/slice";
import directionsReducer from "./directions/slice";
import favoritesReducer from "./favorites/slice";
import restaurantesReducer from "./restaurantes/slice";

export const store = configureStore({
  reducer: {
    directions: directionsReducer,
    restaurantes: restaurantesReducer,
    categories: categoriesReducer,
    favorites: favoritesReducer,
  },
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: {
      directions: directionsReducer,
      restaurantes: restaurantesReducer,
      categories: categoriesReducer,
      favorites: favoritesReducer,
    },
    preloadedState,
  });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
export type AppStore = ReturnType<typeof setupStore>;
