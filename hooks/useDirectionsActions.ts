import { filterByName } from "../store/directions/slice";

import { useAppDispatch } from "./useStore";

export const useDirectionsActions = () => {
  const dispatch = useAppDispatch();

  const filterDirections = (name: string) => {
    dispatch(filterByName(name));
  };

  return {
    filterDirections,
  };
};
