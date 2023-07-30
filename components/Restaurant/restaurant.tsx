import React from "react";
import { Restaurant as RestaurantType } from "../../store/restaurantes/slice";
import {
  MainContainer,
  StyledImage,
  SubTitle,
  SubTitleContainer,
  Title,
} from "./restaurant.styles";

type RestaurantProps = RestaurantType;

export default function Restaurant(props: RestaurantProps) {
  return (
    <MainContainer>
      {!!props?.imagePath && <StyledImage source={props?.imagePath} />}
      <Title>{props?.nombre}</Title>
      <SubTitleContainer>
        <SubTitle>{props?.rating}</SubTitle>
        <SubTitle>{props?.delay}</SubTitle>
      </SubTitleContainer>
    </MainContainer>
  );
}
