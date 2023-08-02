import {
  Direction,
  filterByName,
  selectDirection,
} from "../store/directions/slice";

import { useAppDispatch } from "./useStore";

export const useDirectionsActions = () => {
  const dispatch = useAppDispatch();

  const filterDirections = (name: string) => {
    dispatch(filterByName(name));
  };

  const select = (direction: Direction) => {
    dispatch(selectDirection(direction));
  };

  return {
    filterDirections,
    select,
  };
};
