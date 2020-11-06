import React from 'react';
import './LogIn.css';
import LogInButton from "../../components/shared/Buttons/LogIn";
import SignUpButton from "../../components/shared/Buttons/SignUp";

const LogIn = () => {
  
    return (
        <div className='login-page'>
            <form className='input-form'>
                <label className="username">
                Username <br />
                <input
                />
            </label>
            <label className="password">
            Password <br />
            <input
            type="password"
            />
            </label>
            </form>
            <LogInButton />
            <SignUpButton />
        </div>
    )
}

export default LogIn