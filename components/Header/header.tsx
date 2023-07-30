import React from "react";
import HeaderAnimation from "../HeaderAnimation/HeaderAnimation";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import { StyledView } from "./header.styles";

export default function Header() {
  return (
    <StyledView>
      <HeaderTitle />
      <HeaderAnimation />
    </StyledView>
  );
}
