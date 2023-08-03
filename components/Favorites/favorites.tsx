import React from "react";
import { useTranslation } from "react-i18next";
import { FlatList, View } from "react-native";
import { useAppSelector } from "../../hooks/redux-hooks/useStore";
import Favorite from "../Favorite/favorite";
import { StyledText } from "./favorites.styles";

const Favorites = () => {
  const { t } = useTranslation();

  const favorites = useAppSelector((state) => state?.favorites);

  return (
    <View
      style={{
        marginTop: 20,
      }}
    >
      <StyledText>{t("favorites-title")}</StyledText>
      <FlatList
        data={favorites}
        style={{ marginTop: 10, marginBottom: 10 }}
        horizontal
        renderItem={({ item }) => <Favorite {...item} />}
        keyExtractor={(item) => item?.id}
      />
    </View>
  );
};

export default Favorites;
