import { Avatar } from "@material-ui/core";
import { Apps } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Search from "../components/Search";

function Home() {
  return (
    <HomeContainer>
      <HomeHeader>
        <HeaderLeft>
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </HeaderLeft>
        <HeaderRight>
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <Apps />
          <Avatar />
        </HeaderRight>
      </HomeHeader>
      <HomeBody>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1024px-Google_2015_logo.svg.png"
          alt=""
        />
        <InputContainer>
          <Search />
        </InputContainer>
      </HomeBody>
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const HomeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  align-items: center;

  a {
    margin-right: 20px;
    text-decoration: inherit;
    color: rgba(0, 0, 0, 0.87);
    font-size: 15px;

    :hover {
      text-decoration: underline;
    }
  }
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  min-width: 14vw;
  justify-content: space-between;

  > .MuiSvgIcon-root {
    margin-right: 20px;
  }
`;

const HeaderLeft = styled.div``;

const HomeBody = styled.div`
  flex: 1;
  display: flex;
  margin-top: 10%;
  flex-direction: column;

  img {
    object-fit: contain;
    height: 100px;
  }
`;

const InputContainer = styled.div``;
