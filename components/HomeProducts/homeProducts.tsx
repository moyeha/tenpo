import { Link } from "expo-router";
import React from "react";
import { Pressable } from "react-native";
import Direccion from "../../assets/images/pin.svg";
import Categories from "../Categories/categories";
import Favorites from "../Favorites/favorites";
import Restaurants from "../Restaurants/restaurants";
import {
  AddDirectionContainer,
  AddDirectionLabel,
  HomeProductsContainer,
  MainContainer,
} from "./homeProducts.styles";

export default function homeProducts() {
  return (
    <MainContainer>
      <Link href="/map" asChild>
        <Pressable>
          <AddDirectionContainer>
            <Direccion />
            <AddDirectionLabel>Cambiarlo dinamicamente</AddDirectionLabel>
          </AddDirectionContainer>
        </Pressable>
      </Link>

      <HomeProductsContainer>
        <Restaurants />
        <Categories />
        <Favorites />
      </HomeProductsContainer>
    </MainContainer>
  );
}
