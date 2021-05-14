import { Avatar } from "@material-ui/core";
import { InsertEmoticon, PhotoLibrary, Videocam } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

function MessageSender() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <MessageSenderContainer>
      <MessageSenderTop>
        <Avatar />
        <form>
          <MessageSenderInput placeholder={`What's on our mind`} />

          <input placeholder="image URL (Optional)" />

          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </MessageSenderTop>

      <MessageSenderBottom>
        <MessageSenderOption>
          <Videocam style={{ color: "red" }} />
          <h3>Live Video</h3>
        </MessageSenderOption>

        <MessageSenderOption>
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </MessageSenderOption>

        <MessageSenderOption>
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </MessageSenderOption>
      </MessageSenderBottom>
    </MessageSenderContainer>
  );
}

export default MessageSender;

const MessageSenderContainer = styled.div``;

const MessageSenderTop = styled.div``;

const MessageSenderBottom = styled.div``;

const MessageSenderInput = styled.input``;

const MessageSenderOption = styled.div``;
