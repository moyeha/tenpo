import Constants from "expo-constants";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import styled from "styled-components";
import AddAddress from "../components/AddAddress/AddAddress";
import FilterDirections from "../components/FilterDirections/filterDirections";
import theme from "../theme";
import AddAddressInfo from "../components/AddAddressInfo/AddAddressInfo";

export default function LocationMap() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const onDirectionChanged = (coords: Location.LocationObjectCoords) => {
    setLocation({ ...location, coords });
  };

  return (
    <LocationContainer>
      <AddAddressContainer>
        <AddAddress big>Agruegue Direccion de entrega</AddAddress>
      </AddAddressContainer>

      <MapView
        style={{ flex: 1, backgroundColor: "red" }}
        region={{
          latitude: location?.coords?.latitude || -31.3898749,
          longitude: location?.coords?.longitude || -64.2574818,
          latitudeDelta: 0.004,
          longitudeDelta: 0.005,
        }}
      >
        <Marker
          coordinate={{
            latitude: location?.coords?.latitude || -31.3898749,
            longitude: location?.coords?.longitude || -64.2574818,
          }}
          title="Tu Direccion"
        />
      </MapView>

      <FilterDirections onSelectAddress={onDirectionChanged} />

      <AddAddressInfo />
    </LocationContainer>
  );
}

const LocationContainer = styled(View)({
  flex: "1",
  paddingtop: `${Constants.statusBarHeight}px`,
});

const AddAddressContainer = styled(View)({
  height: "25%",
  backgroundColor: theme.colors.cyan,
  paddingTop: "50px",
  justifyContent: "center",
  alignItems: "center",
});