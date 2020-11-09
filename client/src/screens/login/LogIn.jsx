import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./LogIn.css";
import LogInButton from "../../components/shared/Buttons/LogIn";
import SignUpButton from "../../components/shared/Buttons/SignUp";

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

export default LogIn;
