import { createSlice } from "@reduxjs/toolkit";
import { ImageURISource } from "react-native";

export type Category = {
  id: string;
  nombre: string;
  imagePath?: ImageURISource;
};

const initialState: Category[] = [
  {
    nombre: "Hamburguesas",
    imagePath: require("../../assets/images/categories/burger.png"),
    id: "1",
  },
  {
    nombre: "Italiana",
    imagePath: require("../../assets/images/categories/pasta.png"),
    id: "2",
  },
  {
    nombre: "Pizza",
    imagePath: require("../../assets/images/categories/pizza.png"),
    id: "3",
  },
];

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {},
});

export default categoriesSlice.reducer;
