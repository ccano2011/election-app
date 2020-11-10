import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
// import axios from "axios";
import "./LogIn.css";
import CreateUsers from '../../components/createuser/CreateUser';
// import LogInButton from "../../components/shared/Buttons/LogIn";
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
        <div className="login-page-home">
            <form className="login-form-home" onSubmit={handleSubmit}>
                <label htmlFor='username'><p className='login-label'>Username</p></label>
                <input className="username-home-input"
                    name="username"
                    onChange={handleChange}
                    value={user.username} />

                <label htmlFor="password"><p className='login-label'>Password</p></label>
                <input type="password" className="username-home-input"
                    name="password"
                    onChange={handleChange}
                    value={user.password}
                />
                </form>
                <div className="buttons-home">
                    <button type="submit">Submit</button>
                    <SignUpButton />
                </div>
        </div >
    );
}

export default LogIn