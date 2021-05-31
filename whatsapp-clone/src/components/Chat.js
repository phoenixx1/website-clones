import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { useStateValue } from "../api/StateProvider";
import db from "../firebase";
import firebase from "firebase";

function Chat() {
  const [input, setInput] = useState("");
  // const [seed, setSeed] = useState("");
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));

      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [roomId]);

  // Alternate to use for different Avatar
  // useEffect(() => {
  //   setSeed(Math.floor(Math.random() * 5000));
  // }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("rooms").doc(roomId).collection("messages").add({
      message: input,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <ChatContainer>
      <ChatHeader>
        <Avatar
          src={`https://avatars.dicebear.com/api/avataaars/${roomId}.svg`}
        />

        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>
            Last seen{" "}
            {new Date(
              messages[messages.length - 1]?.timestamp?.toDate()
            ).toUTCString()}
          </p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </ChatHeader>

      <ChatBody>
        {messages.map((message) => (
          // Need to be fixed by checking id, coz 2 people can have same name
          <p
            className={`chat__message ${
              message.name === user.displayName && "chat__reciever"
            } `}
          >
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">
              {new Date(message.timestamp?.toDate()).toUTCString()}
            </span>
          </p>
        ))}
      </ChatBody>

      <ChatFooter>
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <Mic />
      </ChatFooter>
    </ChatContainer>
  );
}

export default Chat;

const ChatContainer = styled.div`
  flex: 0.65;
  display: flex;
  flex-direction: column;
`;

const ChatHeader = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;

  .chat__headerInfo {
    flex: 1;
    padding-left: 20px;

    h3 {
      margin-bottom: 3px;
      font-weight: 500;
    }
    p {
      color: gray;
    }
  }

  .chat__headerRight {
    display: flex;
    min-width: 100px;
    justify-content: space-between;
  }
`;

const ChatBody = styled.div`
  background-image: url("https://res.cloudinary.com/practicaldev/image/fetch/s--WAKqnINn--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/tw0nawnvo0zpgm5nx4fp.png");
  flex: 1;
  background-repeat: repeat;
  background-position: center;
  padding: 30px;
  overflow-y: auto;

  .chat__message {
    position: relative;
    font-size: 16px;
    background-color: #ffffff;
    padding: 10px;
    border-radius: 10px;
    width: fit-content;
    margin-bottom: 30px;

    .chat__name {
      position: absolute;
      top: -15px;
      font-weight: 800;
      font-size: xx-small;
    }

    .chat__timestamp {
      margin-left: 10px;
      font-size: xx-small;
    }
  }
  .chat__reciever {
    margin-left: auto;
    background-color: #dcf8c6;
  }
`;

const ChatFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 62px;
  border-top: 1px solid lightgray;

  form {
    flex: 1;
    display: flex;

    input {
      flex: 1;
      border-radius: 30px;
      padding: 10px;
      border: none;
    }

    button {
      display: none;
    }
  }
  .MuiSvgIcon-root {
    padding: 10px;
    color: gray;
  }
`;
