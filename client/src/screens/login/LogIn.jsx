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
    <div className="login-page-home">
      <form className="login-form-home">
        <label>
          Username <br />
          <input className='username-home'/>
        </label>
        <label>
          Password <br />
          <input type='password' className='username-home'/>
        </label>
      </form>

      <div className="buttons-home">
        <LogInButton onClick={() => setUser()} />
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
