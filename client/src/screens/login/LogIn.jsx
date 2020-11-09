import React from 'react';
import './LogIn.css';
import LogInButton from "../../components/shared/Buttons/LogIn";
import SignUpButton from "../../components/shared/Buttons/SignUp";
// import { userInfo } from 'os';

const LogIn = () => {

    return (
        <div className='login-page'>
            <form className='login-form'>
                <label>
                    Username <br />
                    <input
                    />
                </label>
                <label>
                    Password <br />
                    <input
                        type="password"
                    />
                </label>
            </form>
            <div className='buttons'>
                <LogInButton />
                <SignUpButton />
            </div>
        </div>
    )
}

export default LogIn

//backend: express controller route called 'login
//take the username (i.e. const User= User.find({username;req.body.username}))
// /if user.pasword===rec.body.password, if it's true then res.JSON(user)

//react-side: response from the axios, then you have a user. put it in the react State