import { Avatar } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

function SidebarChat() {
  return (
    <SidebarChatContainer>
      <Avatar />
    </SidebarChatContainer>
  );
}

export default SidebarChat;

const SidebarChatContainer = styled.div``;
