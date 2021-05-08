import { Mic } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import styled from "styled-components";

function Search() {
  return (
    <SearchContainer>
      <SearchInput>
        <SearchIcon />
        <input />
        <Mic />
      </SearchInput>
    </SearchContainer>
  );
}

export default Search;

const SearchContainer = styled.div``;

const SearchInput = styled.div``;
