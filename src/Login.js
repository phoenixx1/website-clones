import React from "react";
import "./Login.css";
import { loginUrl } from "./Spotify";

function Login() {
  return (
    <div className="login">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt=""
      />
      <a href={loginUrl}>Login to Spotify</a>
    </div>
  );
}

export default Login;
