import React, { useEffect } from "react";
import "../Components css/login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { UseStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Login() {
  const [, dispatch] = UseStateValue();

  const signin = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: res.user,
        });
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt="facebooklogo"
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt="facebook"
        />
      </div>
      <Button onClick={signin} type="submit">
        Sign in
      </Button>
    </div>
  );
}

export default Login;
