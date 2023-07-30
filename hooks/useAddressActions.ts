import { addDirection } from "../store/direcciones/slice";

import { useAppDispatch } from "./useStore";

export const useDirectionsActions = () => {
  const dispatch = useAppDispatch();

  const agregarDireccion = (payload: unknown) => {
    dispatch(addDirection(payload));
  };

  return {
    agregarDireccion,
  };
};
