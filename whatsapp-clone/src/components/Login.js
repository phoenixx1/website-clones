import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { actionTypes } from "../api/reducer";
import { useStateValue } from "../api/StateProvider";
import { auth, provider } from "../firebase";

function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <LoginBase>
      <LoginContainer>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png"
          alt=""
        />
        <LoginText>
          <h1>Sign in to Whatsapp</h1>
        </LoginText>

        <Button onClick={signIn}>Sign In with Google</Button>
      </LoginContainer>
    </LoginBase>
  );
}

export default Login;

const LoginBase = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
`;

const LoginContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.12);

  img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
  }
`;

const LoginText = styled.div``;
