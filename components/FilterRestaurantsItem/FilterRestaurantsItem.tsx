import React from "react";
import { Image, Pressable, Text } from "react-native";
import {
  Container,
  StyledImage,
  StyledText,
} from "./FilterRestaurantsItem.styles";
import { Restaurant } from "../../store/restaurantes/slice";

type FilterRestaurantsItemProps = {
  item: Restaurant;
  onPress?: () => void;
};

const FilterRestaurantsItem = ({
  item,
  onPress,
}: FilterRestaurantsItemProps) => {
  return (
    <Pressable onPress={onPress}>
      <Container>
        {!!item?.imagePath && <StyledImage source={item?.imagePath} />}
        <StyledText>{item?.nombre}</StyledText>
      </Container>
    </Pressable>
  );
};

export default FilterRestaurantsItem;
