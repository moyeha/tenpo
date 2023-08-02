import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LocationObjectCoords } from "expo-location";

type MapCoords = {
  latitude: number;
  longitude: number;
};

export interface DirectionInfo {
  directions: Direction[];
  selected: Direction | null;
}

export interface Direction {
  coords: LocationObjectCoords;
  place: string;
  id?: string;
  info?: string;
}

const defaultCoords: LocationObjectCoords = {
  altitude: null,
  accuracy: null,
  altitudeAccuracy: null,
  heading: null,
  speed: null,
  latitude: 0,
  longitude: 0,
};

const initialState: DirectionInfo = {
  selected: null,
  directions: [
    {
      id: "1",
      coords: {
        ...defaultCoords,
        latitude: -31.3898749,
        longitude: -64.2574818,
      },
      place: "Paloma 127, Córdoba, Argentina",
    },
    {
      id: "2",
      coords: {
        ...defaultCoords,
        latitude: -31.3870046,
        longitude: -64.2727925,
      },
      place: "Mario Migone 6818, Córdoba, Argentina",
    },
  ],
};

export const directionsSlice = createSlice({
  name: "directions",
  initialState: initialState,
  reducers: {
    filterByName: (state, action: PayloadAction<string>) => {
      if (!action?.payload) return state;

      // return state.directions.filter((d) =>
      //   d.place?.toLowerCase()?.includes(action?.payload?.toLocaleLowerCase())
      // );
      return {
        ...state,
        directions: state.directions.filter((d) =>
          d.place?.toLowerCase()?.includes(action?.payload?.toLocaleLowerCase())
        ),
      };
    },
    selectDirection: (state, action: PayloadAction<Direction>) => {
      return {
        ...state,
        directions: [...state?.directions],
        selected: action?.payload,
      };
    },
  },
});

export default directionsSlice.reducer;

export const { filterByName, selectDirection } = directionsSlice.actions;
