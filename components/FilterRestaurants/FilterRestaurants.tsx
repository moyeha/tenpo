import React, { useState } from "react";
import { FlatList, Image, Text } from "react-native";
import { useAppSelector } from "../../hooks/useStore";
import { Restaurant } from "../../store/restaurantes/slice";
import FilterRestaurantsItem from "../FilterRestaurantsItem/FilterRestaurantsItem";
import { StyledTextInput } from "../LocationHeader/LocationHeader.styles";
import {
  Container,
  StyledButton,
  StyledButtonLabel,
  StyledButtonLabel2,
  StyledFilters,
} from "./FilterRestaurants.styles";
import Search from "../Search/Search";

const FilterRestaurants = () => {
  const [filteredDirections, setFilteredDirections] = useState<Restaurant[]>(
    []
  );

  const restaurantes = useAppSelector((state) => state?.restaurantes);

  const filterDirections = (text: string) => {
    if (!text) {
      setFilteredDirections([]);

      return [];
    }

    const results = restaurantes.filter((d) =>
      d?.nombre.toLowerCase()?.includes(text?.toLocaleLowerCase())
    );

    setFilteredDirections(results);
  };

  return (
    <Container>
      <StyledFilters>
        <StyledButton>
          <StyledButtonLabel>Solo Locales abiertos</StyledButtonLabel>
          <Image source={require("../../assets/images/check.png")} />
        </StyledButton>
        <StyledButton>
          <StyledButtonLabel>Area de busqueda:</StyledButtonLabel>
          <StyledButtonLabel2>1 KM</StyledButtonLabel2>
        </StyledButton>
      </StyledFilters>

      <FlatList
        data={filteredDirections}
        style={{ marginTop: 20 }}
        renderItem={({ item }) => <FilterRestaurantsItem item={item} />}
        keyExtractor={(item) => item?.id}
      />
      {/* <StyledTextInput
        style={{ position: "absolute", left: 0, top: 0, right: 0 }}
        onChangeText={filterDirections}
      /> */}
      <Search onChangeText={filterDirections} />
    </Container>
  );
};

export default FilterRestaurants;
