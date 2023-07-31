import React from "react";
import { Favorites as FavoriteType } from "../../store/favorites/slice";
import {
  Container,
  MainContainer,
  StyledImage,
  SubTitle,
  SubTitleContainer,
  Title,
} from "./favorite.styles";

type FavoriteProps = FavoriteType;

const Favorite = (props: FavoriteProps) => {
  return (
    <Container>
      <MainContainer>
        {!!props?.imagePath && (
          <StyledImage source={props?.imagePath} resizeMode="cover" />
        )}
        <SubTitleContainer>
          <Title>{props?.combo}</Title>
          <Title>{props?.rating}</Title>
        </SubTitleContainer>
        <SubTitleContainer>
          <SubTitle>{props?.nombre}</SubTitle>
          <Title>{props?.delay}</Title>
        </SubTitleContainer>
      </MainContainer>
    </Container>
  );
};

export default Favorite;
