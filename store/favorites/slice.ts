import { createSlice } from "@reduxjs/toolkit";
import { ImageURISource } from "react-native";

export type Favorites = {
  id: string;
  nombre: string;
  combo: string;
  imagePath: ImageURISource;
  delay: string;
  rating: number;
};

const initialState: Favorites[] = [
  {
    nombre: "Hamburguesas",
    combo: "Combo Hamburguesas Big mac",
    imagePath: require("../../assets/images/favorites/burger.png"),
    id: "1",
    delay: "10-50 min",
    rating: 3.5,
  },
  {
    nombre: "Pizza",
    combo: "Pizza mediana",
    imagePath: require("../../assets/images/favorites/pizza.png"),
    id: "2",
    delay: "10-50 min",
    rating: 3.5,
  },
];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: initialState,
  reducers: {},
});

export default favoritesSlice.reducer;

// export const { getRestaurantesName } = favoritesSlice.actions;
