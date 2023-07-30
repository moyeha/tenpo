import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import uuid from "react-native-uuid";

export interface Direccion {
  coords: MapCoords;
  place: string;
  id?: string;
  info?: string;
}

const initialState: Direccion[] = [
  {
    id: "1",
    coords: { lat: -31.3898749, lng: -64.2574818 },
    place: "Paloma 127, Córdoba, Argentina",
  },
];

export const direccionesSlice = createSlice({
  name: "direcciones",
  initialState: [], //initialState,
  reducers: {
    addDirection: (state, action: PayloadAction<Direccion>) => {
      const id = uuid.v4();

      return [...state, { id, ...action?.payload }];
    },
  },
});

export default direccionesSlice.reducer;

export const { addDirection } = direccionesSlice.actions;
