import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import uuid from "react-native-uuid";

type MapCoords = {
  latitude: number;
  longitude: number;
};

export interface Direction {
  coords: MapCoords;
  place: string;
  id?: string;
  info?: string;
}

const initialState: Direction[] = [
  {
    id: "1",
    coords: { latitude: -31.3898749, longitude: -64.2574818 },
    place: "Paloma 127, Córdoba, Argentina",
  },
  {
    id: "2",
    coords: { latitude: -31.3870046, longitude: -64.2727925 },
    place: "Mario Migone 6818, Córdoba, Argentina",
  },
];

export const directionsSlice = createSlice({
  name: "directions",
  initialState: initialState,
  reducers: {
    filterByName: (state, action: PayloadAction<string>) => {
      if (!action?.payload) return state;

      return state.filter((d) =>
        d.place?.toLowerCase()?.includes(action?.payload?.toLocaleLowerCase())
      );
    },
  },
});

export default directionsSlice.reducer;

export const { filterByName } = directionsSlice.actions;
