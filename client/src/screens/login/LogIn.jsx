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
                <label htmlFor='username'>Username</label>
                <input className="username-home"
                    name="username"
                    onChange={handleChange}
                    value={user.username} />

                <label htmlFor="password"> Password</label>
                <input type="password" className="username-home"
                    name="password"
                    onChange={handleChange}
                    value={user.password}
                />

                <div className="buttons-home">
                    <button type="submit">Submit</button>
                    <SignUpButton />
                </div>
            </form>
        </div >
    );
}

export default LogIn