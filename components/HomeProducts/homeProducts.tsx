import { Link } from "expo-router";
import React from "react";
import { Pressable } from "react-native";
import AddAddress from "../AddAddress/AddAddress";
import Categories from "../Categories/categories";
import Favorites from "../Favorites/favorites";
import Restaurants from "../Restaurants/restaurants";
import { HomeProductsContainer, MainContainer } from "./homeProducts.styles";

const homeProducts = () => {
  return (
    <MainContainer>
      <Link href="/location" asChild>
        <Pressable>
          <AddAddress>Cambiarlo dinamicamente2</AddAddress>
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
