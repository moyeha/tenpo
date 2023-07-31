import { Link } from "expo-router";
import React from "react";
import { Image, Pressable } from "react-native";
import SearchIcon from "../../assets/images/search.svg";
import { StyledView } from "./navigation.styles";

const Navigation = () => {
  return (
    <StyledView>
      <Image source={require("../../assets/images/avatar1.png")} />

      <Link href="/location" asChild>
        <Pressable>
          <SearchIcon size={24} style={{ marginTop: 10 }} />
        </Pressable>
      </Link>
    </StyledView>
  );
};

export default Navigation;
