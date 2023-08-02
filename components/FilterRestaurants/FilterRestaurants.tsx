import React, { useState } from "react";
import { FlatList, Image } from "react-native";
import { useAppSelector } from "../../hooks/redux-hooks/useStore";
import { Restaurant } from "../../store/restaurantes/slice";
import FilterRestaurantsItem from "../FilterRestaurantsItem/FilterRestaurantsItem";
import Search from "../Search/Search";
import {
  Container,
  StyledButton,
  StyledButtonLabel,
  StyledButtonLabel2,
  StyledFilters,
} from "./FilterRestaurants.styles";
import { useTranslation } from "react-i18next";

const FilterRestaurants = () => {
  const { t } = useTranslation();

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
          <StyledButtonLabel>
            {t("filter-restaurants-title1")}
          </StyledButtonLabel>
          <Image source={require("../../assets/images/check.png")} />
        </StyledButton>
        <StyledButton>
          <StyledButtonLabel>
            {t("filter-restaurants-title2")}
          </StyledButtonLabel>
          <StyledButtonLabel2>
            {t("filter-restaurants-title3")}
          </StyledButtonLabel2>
        </StyledButton>
      </StyledFilters>

      <FlatList
        data={filteredDirections}
        style={{ marginTop: 20 }}
        renderItem={({ item }) => <FilterRestaurantsItem item={item} />}
        keyExtractor={(item) => item?.id}
      />
      <Search onChangeText={filterDirections} />
    </Container>
  );
};

export default FilterRestaurants;
