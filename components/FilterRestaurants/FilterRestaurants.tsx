import React, { useState } from "react";
import { FlatList, Text } from "react-native";
import { useAppSelector } from "../../hooks/useStore";
import { Restaurant } from "../../store/restaurantes/slice";
import FilterRestaurantsItem from "../FilterRestaurantsItem/FilterRestaurantsItem";
import { StyledTextInput } from "../LocationHeader/LocationHeader.styles";
import {
  Container,
  StyledButton,
  StyledButtonLabel,
  StyledFilters,
} from "./FilterRestaurants.styles";

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
        </StyledButton>
        <StyledButton>
          <StyledButtonLabel>Solo Locales abiertos</StyledButtonLabel>
        </StyledButton>
      </StyledFilters>
      <StyledTextInput onChangeText={filterDirections} />
      <FlatList
        data={filteredDirections}
        style={{ marginTop: 130 }}
        renderItem={({ item }) => <FilterRestaurantsItem item={item} />}
        keyExtractor={(item) => item?.id}
      />
    </Container>
  );
};

export default FilterRestaurants;
