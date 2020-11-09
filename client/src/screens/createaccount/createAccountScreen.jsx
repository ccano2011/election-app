import React, { useContext, useState, /*createContext*/ } from 'react';
// import Nav from '../../components/shared/Nav/Nav'
import { createUser } from '../../services/usersConnect.js'
import { Link, useHistory } from "react-router-dom"
import ArrowImg from '../../Assets/left-arrow.svg';
import CreateUsers from '../../components/createuser/CreateUser'
import './createAccountScreen.css'


const CreateAccountScreen = () => {
    const { value, setValue } = useContext(CreateUsers)

    const [user, setuser] = useState({
        username: '',
        password: '',
    })

    const [isCreated, setCreated] = useState(false)
    console.log(isCreated)

    const handleChange = (event) => {
        const { name, value } = event.target
        setuser({
            ...user,
            [name]: value
        })
    }

    const context = Object.values(user)
    console.log(context)
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const created = await createUser(user)
        setCreated({ created })
        //I tried to get pass in the user in state to setValue, but get an error 
        //regarding objects not being valid children in react... what to do?? Change into an array?
        setValue(context)
        setTimeout(() => {
            history.push(`/dashboard`)
        }, 1000)
    }
    console.log(value)
    return (
        <div className="createAccountDiv">
            <div className='emptyNav'></div>
            {/* <Nav /> */}
            <div className='deletedSubHeader'>
                <Link to='/'>
                    <img className='arrow' src={ArrowImg} alt='arrow' height='25' weight='25' />
                </Link>
                <p className="deletedHeadline">Create Your Account</p>
            </div>
            <div className="user-header">
                {/* <h4>Request an Absentee Ballot</h4> */}
            </div>
            {/* <div><h1>Sumbitting...</h1></div> */}
            <div className="user-container">
                {/* <h1>{value}</h1> */}
                {/* <button onClick={() => setValue('Value changed from within the "createAccountScreen.jsx"')}>click to change</button> */}
                <form className="user-form" onSubmit={handleSubmit}>

                    {/* <img alt="Put your profile picture here"></img> */}
                    <label className="user">
                        Create a Username: <br />
                        <input
                            className="username"
                            value={user.username}
                            name='username'
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label className="pass">
                        Create a Password: <br />
                        <input
                            className="password"
                            value={user.password}
                            name='password'
                            required
                            onChange={handleChange}
                        />
                    </label>

                    <button type='submit' className="confirm-button" >Confirm</button>
                    <Link to="/"><button className='cancel-button'>Cancel</button></Link>
                </form>
            </div>
        </div>
    )
}
export default CreateAccountScreen

//use context hooks
//on the front end; listen for the input that will match
//on the back-end; findUserBy: email