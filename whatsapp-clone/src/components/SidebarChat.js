import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import db from "../firebase";

function SidebarChat({ addNewChat, id, name }) {
  // const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState([]);

  // Alternate to use for different Avatar
  // useEffect(() => {
  //   setSeed(Math.floor(Math.random() * 5000));
  // }, []);

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);

  const createChat = () => {
    const roomName = prompt("Please enter name for chatroom");
    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
    <URLLink to={`/rooms/${id}`}>
      <SidebarChatContainer>
        <Avatar src={`https://avatars.dicebear.com/api/avataaars/${id}.svg`} />
        <SidebarChatInfo>
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </SidebarChatInfo>
      </SidebarChatContainer>
    </URLLink>
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

const URLLink = styled(Link)`
  text-decoration: none !important;
  color: black;
`;

const SidebarChatInfo = styled.div`
  margin-left: 15px;

  h2 {
    font-size: 16px;
    margin-bottom: 15px;
  }
`;
