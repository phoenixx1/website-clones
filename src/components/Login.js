import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { useStateValue } from "../api/StateProvider";
import { auth, provider } from "../firebase";
import { actionTypes } from "../api/reducer";

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
    <LoginContainer>
      <LoginLogo>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
      </LoginLogo>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;

  Button {
    width: 300px;
    background-color: #2e81f4;
    color: #eff2f5;
    font-weight: 800;

    :hover {
      background-color: white;
      color: #2e81f4;
    }
  }
`;

const LoginLogo = styled.div`
  display: flex;
  flex-direction: column;
  img {
    object-fit: contain;
    height: 150px;
  }
`;
