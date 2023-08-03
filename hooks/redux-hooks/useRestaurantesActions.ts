import { getRestaurantesName } from "../../store/restaurantes/slice";

import { useAppDispatch } from "./useStore";

export const useRestaurantesActions = () => {
  const dispatch = useAppDispatch();

  const filterRestaurantes = (name: string) => {
    dispatch(getRestaurantesName(name));
  };

  return {
    filterRestaurantes,
  };
};
