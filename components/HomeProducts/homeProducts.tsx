import { Link } from "expo-router";
import React from "react";
import { Pressable } from "react-native";
import AddAddress from "../AddAddress/AddAddress";
import Categories from "../Categories/categories";
import Favorites from "../Favorites/favorites";
import Restaurants from "../Restaurants/restaurants";
import { HomeProductsContainer, MainContainer } from "./homeProducts.styles";
import { useAppSelector } from "../../hooks/redux-hooks/useStore";
import { useTranslation } from "react-i18next";

const homeProducts = () => {
  const { t } = useTranslation();

  const selectedDirection = useAppSelector(
    (state) => state?.directions.selected
  );

  return (
    <MainContainer>
      <Link
        href={selectedDirection?.place ? "/restaurants" : "location"}
        asChild
      >
        <Pressable aria-label="home-products">
          {selectedDirection ? (
            <AddAddress>{selectedDirection?.place}</AddAddress>
          ) : (
            <AddAddress big>{t("home-products-add-address")}</AddAddress>
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
