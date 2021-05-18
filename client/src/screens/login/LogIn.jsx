import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
// import axios from "axios";
import "./LogIn.css";
import CreateUsers from '../../components/createuser/CreateUser';
import SignUpButton from "../../components/shared/Buttons/SignUp";
import { login } from "../../services/usersConnect"


function LogIn() {
    const { value, setValue } = useContext(CreateUsers)
    console.log(value)
    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    const [loggedIn, setLoggedIn] = useState(false);

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

    //Janice helped us figure out the logic for login
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
        <div className="login-page-home">
            <form className="login-form-home" onSubmit={handleSubmit}>
                <div className='input-div'>
                    <label htmlFor='username'><p className='login-label'>Username</p></label>
                </div>
                <input className="username-home-input"
                    type="text"
                    name="username"
                    onChange={handleChange}
                    value={user.username} />

                <div className='input-div'>
                    <label htmlFor="password"><p className='login-label'>Password</p></label>
                </div>
                <input type="password" className="username-home-input"
                    name="password"
                    onChange={handleChange}
                    value={user.password}
                />

                <div className="buttons-home">
                    <button className='login-button' type="submit">Log In</button>
                    <SignUpButton className='signup-btn' />
                </div>
            </form>
        </div >
    );
}

export default LogIn