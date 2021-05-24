import React from "react";
import styled from "styled-components";
import { Avatar, IconButton } from "@material-ui/core";
import { Chat, DonutLarge, MoreVert, SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <Avatar />
        <div className="headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </SidebarHeader>

      <SidebarSearch>
        <div className="searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </SidebarSearch>

      <SidebarChats>
        <SidebarChat />
      </SidebarChats>
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  flex: 0.35;
  display: flex;
  flex-direction: column;
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-right: 1px solid lightgray;

  .headerRight {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 10vw;

    .MuiSvgIcon-root {
      /* margin-right: 2vw; */
      font-size: 24px !important;
    }
  }
`;

const SidebarSearch = styled.div`
  display: flex;
  align-items: center;
  background-color: #f6f6f6;
  height: 39px;
  padding: 10px;

  .searchContainer {
    display: flex;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 35px;
    border-radius: 20px;

    input {
      border: none;
      margin-left: 10px;
    }

    .MuiSvgIcon-root {
      color: gray;
      padding: 10px;
    }
  }
`;

const SidebarChats = styled.div`
  flex: 1;
  background-color: white;
  overflow-y: auto;
`;
