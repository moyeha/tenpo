import React from "react";
import HeaderAnimation from "../HeaderAnimation/HeaderAnimation";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import { StyledView } from "./header.styles";

const Header = () => {
  return (
    <StyledView>
      <HeaderTitle />
      <HeaderAnimation />
    </StyledView>
  );
};

export default Header;
