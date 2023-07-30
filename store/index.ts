import { configureStore } from "@reduxjs/toolkit";
import direccionesReducer from "./direcciones/slice";
import paticionesReducer from "./requests/slice";
import restaurantesReducer from "./restaurantes/slice";
import categoriesReducer from "./categories/slice";
import favoritesReducer from "./favorites/slice";

export const store = configureStore({
  reducer: {
    direcciones: direccionesReducer,
    paticiones: paticionesReducer,
    restaurantes: restaurantesReducer,
    categories: categoriesReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
