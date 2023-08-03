import React from "react";
import { Category as CategoryType } from "../../store/categories/slice";
import {
  MainContainer,
  StyledImage,
  Title,
  TitleContainer,
} from "./category.styles";

type RestaurantProps = CategoryType;

const Category = (props: RestaurantProps) => {
  return (
    <MainContainer>
      {!!props?.imagePath && <StyledImage source={props?.imagePath} />}
      <TitleContainer>
        <Title>{props?.nombre}</Title>
      </TitleContainer>
    </MainContainer>
  );
};

export default Category;
