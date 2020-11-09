import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./LogIn.css";
import LogInButton from "../../components/shared/Buttons/LogIn";
import SignUpButton from "../../components/shared/Buttons/SignUp";
// import { userInfo } from 'os';

function LogIn() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const response = `https://election-ballot-app.herokuapp.com/user`;
    const makeCall = async () => {
      const res = await axios.get(response);
      setUser(res.data);
    };
    makeCall();
  }, []);
  console.log(user);

  if (loggedIn) {
    return <Redirect to={"/dashboard"} />;
  }

  return (
    <div className="login-page">
      <form className="login-form">
        <label>
          Username <br />
          <input type="username" />
        </label>
        <label>
          Password <br />
          <input type="password" />
        </label>
        <div className="logInButton">
          <LogInButton onClick={() => setUser()} />
        </div>
      </form>

      <div className="buttons">
        <SignUpButton />
      </div>
    </div>
  );
}

export default LogIn

//backend: express controller route called 'login
//take the username (i.e. const User= User.find({username;req.body.username}))
// /if user.pasword===rec.body.password, if it's true then res.JSON(user)

//react-side: response from the axios, then you have a user. put it in the react State
