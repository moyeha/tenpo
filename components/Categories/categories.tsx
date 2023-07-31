import React from "react";
import { useTranslation } from "react-i18next";
import { FlatList, View } from "react-native";
import { useAppSelector } from "../../hooks/useStore";
import Category from "../Category/category";
import { StyledText } from "./categories.styles";

const Categories = () => {
  const { t } = useTranslation();

  const categories = useAppSelector((state) => state?.categories);

  return (
    <View
      style={{
        marginTop: 20,
      }}
    >
      <StyledText>{t("categories-title")}</StyledText>
      <FlatList
        data={categories}
        style={{ marginTop: 10 }}
        horizontal
        renderItem={({ item }) => <Category {...item} />}
        keyExtractor={(item) => item?.id}
      />
    </View>
  );
};

export default Categories;
