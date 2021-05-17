import { Avatar } from "@material-ui/core";
import {
  AccountCircle,
  ChatBubbleOutline,
  ExpandMoreOutlined,
  NearMe,
  ThumbUp,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <PostContainer>
      <PostTop>
        <PostAvatar src={profilePic} />
        <PostTopInfo>
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </PostTopInfo>
      </PostTop>

      <PostBottom>
        <p>{message}</p>
      </PostBottom>

      <PostImage>
        <img src={image} alt="" />
      </PostImage>

      <PostOptions>
        <PostOption>
          <ThumbUp />
          <p>Like</p>
        </PostOption>
        <PostOption>
          <ChatBubbleOutline />
          <p>Comment</p>
        </PostOption>
        <PostOption>
          <NearMe />
          <p>Share</p>
        </PostOption>
        <PostOption>
          <AccountCircle />
          <ExpandMoreOutlined />
        </PostOption>
      </PostOptions>
    </PostContainer>
  );
}

export default Post;

const PostContainer = styled.div`
  width: 100%;
  margin-top: 15px;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
`;

const PostTop = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding: 15px;
`;

const PostAvatar = styled(Avatar)`
  margin-right: 10px;
`;

const PostTopInfo = styled.div`
  h3 {
    font-size: medium;
  }
  p {
    font-size: small;
    color: gray;
  }
`;

const PostBottom = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 15px 25px;
`;

const PostImage = styled.div`
  img {
    width: 100%;
  }
`;

const PostOptions = styled.div`
  padding-top: 10px;
  border-top: 1px solid lightgray;
  justify-content: space-evenly;
  display: flex;
  font-size: medium;
  color: gray;
  cursor: pointer;
  padding: 15px;
`;

const PostOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  flex: 1;

  p {
    margin-left: 10px;
  }

  :hover {
    background-color: #eff2f5;
    border-radius: 10px;
  }
`;
