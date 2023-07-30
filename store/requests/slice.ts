import { createSlice } from "@reduxjs/toolkit";

export interface Peticion {
  numeroPeticion: number;
  numeroFallos: number;
}

const initialState: Peticion = {
  numeroPeticion: 0,
  numeroFallos: 0,
};

export const peticionSlice = createSlice({
  name: "peticiones",
  initialState: initialState,
  reducers: {
    addPeticion: (state) => {
      return { ...state, numeroPeticion: state?.numeroPeticion + 1 };
    },
    addFallo: (state) => {
      return { ...state, numeroFallos: state?.numeroFallos + 1 };
    },
  },
});

export default peticionSlice.reducer;

export const { addPeticion, addFallo } = peticionSlice.actions;
