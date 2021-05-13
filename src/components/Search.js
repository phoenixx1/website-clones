import { Button } from "@material-ui/core";
import { Mic } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    history.push("/search");
  };

  return (
    <SearchContainer>
      <SearchInput classes={{ root: "searchInput" }} className="searchInput">
        <SearchIcon style={{ color: "gray" }} />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <Mic />
      </SearchInput>
      {!hideButtons ? (
        <SearchButtons>
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm feeling Lucky</Button>
        </SearchButtons>
      ) : (
        <SearchButtons>
          <Button
            className="hidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="hidden" variant="outlined">
            I'm feeling Lucky
          </Button>
        </SearchButtons>
      )}
    </SearchContainer>
  );
}

export default Search;

const SearchContainer = styled.form``;

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  height: 30px;
  padding: 10px 20px;
  border-radius: 999px;
  width: 75vw;
  margin: 0 auto;
  margin-top: 40px;
  max-width: 560px;

  input {
    flex: 1;
    padding: 10px 20px;
    border: none;
    font-size: medium;

    :focus {
      outline-width: 0;
    }
  }
`;

const SearchButtons = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;

  Button {
    margin: 5px;
    padding: 7px 15px;
    background-color: #f8f8f8;
    border: 1px solid white;
    text-transform: inherit;
    color: #5f6368;

    :hover {
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
      background-image: -webkit-linear-gradient(top, #f8f8f8, #f1f1f1);
      border: 1px solid #c6c6c6;
      color: #222;
    }
  }
  .hidden {
    display: none !important;
  }
`;
