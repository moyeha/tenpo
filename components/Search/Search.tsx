import React from "react";
import { SearchContainer, StyledTextInput } from "./Search.styles";
import SearchIcon from "../../assets/images/search.svg";
import { TextInputProps } from "react-native";

type SearchProps = TextInputProps;

const Search = ({ onChangeText }: SearchProps) => {
  return (
    <SearchContainer>
      <StyledTextInput onChangeText={onChangeText} />
      <SearchIcon
        size={24}
        style={{ marginTop: 10, position: "absolute", right: 23, top: 5 }}
      />
    </SearchContainer>
  );
};

export default Search;
