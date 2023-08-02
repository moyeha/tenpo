import { addPeticion, addFallo } from "../../store/requests/slice";

import { useAppDispatch } from "./useStore";

export const usePeticionActions = () => {
  const dispatch = useAppDispatch();

  const agregarPeticion = () => {
    dispatch(addPeticion());
  };

  const agregarFallo = () => {
    dispatch(addFallo());
  };

  return {
    agregarPeticion,
    agregarFallo,
  };
};
