import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import db from "../firebase";

function SidebarChat({ addNewChat, id, name }) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for chatroom");
    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
    <SidebarChatContainer>
      <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
      <SidebarChatInfo>
        <h2>{name}</h2>
        <p>Last message....</p>
      </SidebarChatInfo>
    </SidebarChatContainer>
  ) : (
    <SidebarChatContainer onClick={createChat}>
      <h2>Add new chat</h2>
    </SidebarChatContainer>
  );
}

export default SidebarChat;

const SidebarChatContainer = styled.div`
  display: flex;
  padding: 20px;
  cursor: pointer;
  border-bottom: 1px solid #f6f6f6;

  :hover {
    background-color: #ebebeb;
  }
`;

const SidebarChatInfo = styled.div`
  margin-left: 15px;

  h2 {
    font-size: 16px;
    margin-bottom: 15px;
  }
`;
