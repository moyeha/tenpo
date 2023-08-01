import axios from "axios";
import { useState } from "react";
import { GooglePlaceData } from "react-native-google-places-autocomplete";
import { Direction } from "../store/directions/slice";
import { usePeticionActions } from "./usePeticionActions";
import { useAppSelector } from "./useStore";

type addAddressType = {
  place: GooglePlaceData | null;
  coords: MapCoords | null;
};

const useAddress = () => {
  const { agregarPeticion, agregarFallo } = usePeticionActions();

  const { numeroPeticion, numeroFallos } = useAppSelector(
    (state) => state?.paticiones
  );

  const [data, setData] = useState<Direction | null>(null);

  const [error, setError] = useState<string | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const addAddress = async (props: addAddressType) => {
    try {
      setIsLoading(true);

      setError(null);

      setData(null);

      const regla = (numeroFallos * 100) / numeroPeticion || 0;

      agregarPeticion();

      const response = await axios.post(
        `https://direcciones.free.beeceptor.com/`,
        {
          latitude: props.coords?.lat,
          longitude: props.coords?.lng,
          place: props.place,
        }
      );

      if (numeroPeticion && regla < 20) {
        agregarFallo();

        throw new Error("Fallo en la llamada asíncrona");
      }

      setIsLoading(false);

      setData({
        place: response?.data?.place,
        coords: { lat: response.data?.latitude, lng: response.data?.longitude },
      });
    } catch (error) {
      setIsLoading(false);

      setError(error as string);
    }
  };

  return {
    addAddress,
    data,
    error,
    isLoading,
  };
};

export default useAddress;
