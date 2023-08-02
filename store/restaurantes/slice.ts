import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ImageURISource } from "react-native";

export type Restaurant = {
  id: string;
  nombre: string;
  imagePath?: ImageURISource;
  delay: string;
  rating: number;
};

const initialState: Restaurant[] = [
  {
    nombre: "Mcdonald",
    imagePath: require("../../assets/images/restaurants/mcdonald.png"),
    delay: "10-50 min",
    id: "1",
    rating: 3.5,
  },
  {
    nombre: "Melt",
    imagePath: require("../../assets/images/restaurants/melt.png"),
    delay: "10-50 min",
    id: "2",
    rating: 3.5,
  },
  {
    nombre: "YOKONO",
    imagePath: require("../../assets/images/restaurants/yokono.png"),
    delay: "10-50 min",
    id: "3",
    rating: 3.5,
  },
  {
    nombre: "Papa Jhons",
    imagePath: require("../../assets/images/restaurants/papa.png"),
    delay: "10-50 min",
    id: "4",
    rating: 3.5,
  },
];

export const restaurantsSlice = createSlice({
  name: "restaurantes",
  initialState: initialState,
  reducers: {
    getRestaurantesName: (state, action: PayloadAction<string>) => {
      return state.filter((r) => {
        const caracteresFiltro = action.payload.toLowerCase();

        const nombreFiltro = r?.nombre?.toLowerCase();

        const results = nombreFiltro?.includes(caracteresFiltro);

        return results;
      });
    },
  },
});

export default restaurantsSlice.reducer;

export const { getRestaurantesName } = restaurantsSlice.actions;
