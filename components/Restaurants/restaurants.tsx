import React from "react";
import { useTranslation } from "react-i18next";
import { FlatList, Image, ScrollView, View } from "react-native";
import { StyledText } from "./restaurants.styles";
import { useAppSelector } from "../../hooks/redux-hooks/useStore";
import Restaurant from "../Restaurant/restaurant";

const Restaurants = () => {
  const { t } = useTranslation();

  const restaurantes = useAppSelector((state) => state?.restaurantes);

  return (
    <View
      style={{
        flexBasis: "auto",
      }}
    >
      <StyledText>{t("restaurants-title")}</StyledText>
      <FlatList
        data={restaurantes}
        style={{ marginTop: 10 }}
        horizontal
        renderItem={({ item }) => <Restaurant {...item} />}
        keyExtractor={(item) => item?.id}
      />
    </View>
  );
};

export default Restaurants;
