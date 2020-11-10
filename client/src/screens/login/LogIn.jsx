import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
// import axios from "axios";
import "./LogIn.css";
import CreateUsers from '../../components/createuser/CreateUser';
import LogInButton from "../../components/shared/Buttons/LogIn";
import SignUpButton from "../../components/shared/Buttons/SignUp";
import { login } from "../../services/usersConnect"
// import { userInfo } from 'os';

function LogIn() {
    const { value, setValue } = useContext(CreateUsers)
    console.log(value)
    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    const [loggedIn, setLoggedIn] = useState(false);

    // useEffect(() => {
    //   const response = `https://election-ballot-app.herokuapp.com/user`;
    //   const makeCall = async () => {
    //     const res = await axios.get(response);
    //     setUser(res.data);
    //   };
    //   makeCall();
    // }, []);
    // console.log(user);


    if (loggedIn) {
        return <Redirect to={"/dashboard"} />;
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(user)
        try {
            let tempUser = await login(user)
            setValue(tempUser)

        }
        catch (error) {
            throw error
        }
        setLoggedIn(true)
    }

    return (
        <div className="login-page">
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text"
                    name="username"
                    onChange={handleChange}
                    value={user.username} />

                <label htmlFor="password"> Password</label>
                <input type="password"
                    name="password"
                    onChange={handleChange}
                    value={user.password}
                />

                <div className="logInButton">
                    <button type="submit">Submit</button>
                </div>
            </form>

            <div className="buttons">
                <SignUpButton />
            </div>
        </div >
    );
}

export default LogIn

//backend: express controller route called 'login
//take the username (i.e. const User= User.find({username;req.body.username}))
// /if user.pasword===rec.body.password, if it's true then res.JSON(user)

//react-side: response from the axios, then you have a user. put it in the react State
