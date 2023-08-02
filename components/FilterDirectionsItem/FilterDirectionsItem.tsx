import React from "react";
import { Pressable, Text } from "react-native";
import { Container } from "./FilterDirectionsItem.styles";

type FilterDirectionsItemProps = {
  title: string;
  onPress: () => void;
};

const FilterDirectionsItem = ({
  title,
  onPress,
}: FilterDirectionsItemProps) => {
  return (
    <Pressable onPress={onPress} aria-label="filter-directions-item">
      <Container>
        <Text>{title}</Text>
      </Container>
    </Pressable>
  );
};

export default FilterDirectionsItem;
