import React from "react";
import styled from "styled-components";
import MessageSender from "./MessageSender";
import StoryReel from "./StoryReel";

function Feed() {
  return (
    <FeedContainer>
      <StoryReel />
      <MessageSender />
    </FeedContainer>
  );
}

export default Feed;

const FeedContainer = styled.div`
  flex: 1;
  padding: 30px 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
