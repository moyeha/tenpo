import { Link } from "expo-router";
import React from "react";
import { Pressable } from "react-native";
import AddAddress from "../AddAddress/AddAddress";
import Categories from "../Categories/categories";
import Favorites from "../Favorites/favorites";
import Restaurants from "../Restaurants/restaurants";
import { HomeProductsContainer, MainContainer } from "./homeProducts.styles";
import { useAppSelector } from "../../hooks/useStore";

const homeProducts = () => {
  const selectedDirection = useAppSelector(
    (state) => state?.directions.selected
  );

  return (
    <MainContainer>
      <Link
        href={selectedDirection?.place ? "/restaurants" : "location"}
        asChild
      >
        <Pressable>
          {selectedDirection ? (
            <AddAddress>{selectedDirection?.place}</AddAddress>
          ) : (
            <AddAddress>Cambiarlo dinamicamente</AddAddress>
          )}
        </Pressable>
      </Link>

      <HomeProductsContainer>
        <Restaurants />
        <Categories />
        <Favorites />
      </HomeProductsContainer>
    </MainContainer>
  );
};

export default homeProducts;
