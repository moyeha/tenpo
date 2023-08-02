import React from "react";
import {
  MainContainer,
  StyledText1,
  StyledText2,
  StyledText3,
} from "./HeaderTitle.styles";
import { useTranslation } from "react-i18next";

const HeaderTitle = () => {
  const { t } = useTranslation();

  return (
    <MainContainer>
      <StyledText1>{t("header-title1")}</StyledText1>
      <StyledText2>{t("header-title2")}</StyledText2>
      <StyledText3>{t("header-title3")}</StyledText3>
    </MainContainer>
  );
};

export default HeaderTitle;
