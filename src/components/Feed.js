import React from "react";
import styled from "styled-components";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";

function Feed() {
  return (
    <FeedContainer>
      <StoryReel />
      <MessageSender />

      <Post
        profilePic="https://avatars.githubusercontent.com/u/44865935?v=4"
        message="Shut Up"
        timestamp="Bekar Time"
        username="Phoenixx1"
        image="https://cdn.coingape.com/wp-content/uploads/2021/02/07192013/Cardano-ADA-Ripple-XRP.jpg"
      />
      <Post
        profilePic="https://avatars.githubusercontent.com/u/44865935?v=4"
        message="Shut Up"
        timestamp="Bekar Time"
        username="Phoenixx1"
      />
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
