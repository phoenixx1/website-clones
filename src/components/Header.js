import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import {
  Add,
  ExpandMore,
  Flag,
  Forum,
  Home,
  NotificationsActive,
  StorefrontOutlined,
  SubscriptionsOutlined,
  SupervisedUserCircle,
} from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <HeaderInput>
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </HeaderInput>
      </HeaderLeft>

      <HeaderCenter>
        <HeaderOption className="header__option--active">
          <Home fontSize="large" />
        </HeaderOption>

        <HeaderOption>
          <Flag fontSize="large" />
        </HeaderOption>

        <HeaderOption>
          <SubscriptionsOutlined fontSize="large" />
        </HeaderOption>

        <HeaderOption>
          <StorefrontOutlined fontSize="large" />
        </HeaderOption>

        <HeaderOption>
          <SupervisedUserCircle fontSize="large" />
        </HeaderOption>
      </HeaderCenter>

      <HeaderRight>
        <HeaderInfo>
          <Avatar />
          <h4>Phoenix</h4>
        </HeaderInfo>

        <IconButton>
          <Add />
        </IconButton>
        <IconButton>
          <Forum />
        </IconButton>
        <IconButton>
          <NotificationsActive />
        </IconButton>
        <IconButton>
          <ExpandMore />
        </IconButton>
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  padding: 15px 20px;
  justify-content: space-between;
  position: sticky;
  background-color: white;
  z-index: 100;
  top: 0;
  box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
`;

const HeaderLeft = styled.div`
  display: flex;
  justify-content: space-evenly;

  img {
    height: 40px;
  }
`;

const HeaderInput = styled.div`
  display: flex;
  align-items: center;
  background-color: #eff2f5;
  padding: 10px;
  margin-left: 10px;
  border-radius: 33px;
  border-radius: 999px;

  input {
    border: none;
    background-color: transparent;
    outline-width: 0;
  }
`;

const HeaderCenter = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const HeaderOption = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 30px;

  :hover {
    background-color: #eff2f5;
    border-radius: 10px;
    align-items: center;
    padding: 0 30px;
    border-bottom: none;
  }

  .MuiSvgIcon-root {
    color: gray;
    :hover {
      color: #2e81f4;
    }
  }
  &.header__option--active {
    border-bottom: 4px solid #2e81f4;
  }
`;

const HeaderRight = styled.div`
  display: flex;
`;

const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  h4 {
    margin-left: 10px;
  }
`;
