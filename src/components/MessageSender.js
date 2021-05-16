import { Avatar } from "@material-ui/core";
import { InsertEmoticon, PhotoLibrary, Videocam } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";

function MessageSender() {
  const [input, setInput] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setInput("");
    setImgUrl("");
  };

  return (
    <MessageSenderContainer>
      <MessageSenderTop>
        <Avatar />
        <form>
          <MessageSenderInput
            value={input}
            placeholder={`What's on our mind?`}
            onChange={(e) => setInput(e.target.value)}
          />

          <input
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            placeholder="image URL (Optional)"
          />

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

const MessageSenderContainer = styled.div`
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
  width: 100%;
`;

const MessageSenderTop = styled.div`
  display: flex;
  border-bottom: 1px solid #eff2f5;
  padding: 15px;

  form {
    flex: 1;
    display: flex;

    input {
      outline-width: 0;
      border: none;
      padding: 5px 20px;
      margin: 0 10px;
      border-radius: 999px;
      background-color: #eff2f5;
    }

    button {
      display: none;
    }
  }
`;

const MessageSenderBottom = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const MessageSenderInput = styled.input`
  flex: 1;
`;

const MessageSenderOption = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  color: gray;
  margin: 5px;
  cursor: pointer;

  h3 {
    font-size: medium;
    margin-left: 10px;
    cursor: pointer;

    :hover {
      background-color: #eff2f5;
      border-radius: 20px;
    }
  }
`;
