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
        localStorage.setItem("user", JSON.stringify(context))
        // window.location.reload()
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
                    <h3>Enter Your Info</h3>
                    <label className="first">
                        First Name <br />
                        <input
                            className="firstName"
                            value={user.firstName}
                            name='firstName'
                            // placeholder={value[0]}
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label className="last">
                        Last Name <br />
                        <input
                            className="lastName"
                            value={user.lastName}
                            name='lastName'
                            // placeholder={value[1]}
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <h4 className="reg-question">Where are you registered to vote?</h4>
                    <label className="street">
                        Street Address <br />
                        <input
                            className="address"
                            value={user.streetAddress}
                            name='streetAddress'
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label className="apt">
                        Apartment/Suite <br />
                        <input
                            className="aptSuite"
                            value={user.apartmentSuite}
                            name='apartmentSuite'
                            onChange={handleChange}
                        />
                    </label>
                    <label className="cit">
                        City <br />
                        <input
                            className="city"
                            value={user.city}
                            name='city'
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label className="stat">
                        County <br />
                        <input
                            className="county"
                            value={user.county}
                            name='county'
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label className="zip">
                        Zip Code <br />
                        <input
                            className="zipCode"
                            type='number'
                            value={user.zipCode}
                            name='zipCode'
                            required
                            onChange={handleChange}
                        />
                    </label> <br />
                    <div className="dob">
                        <label>
                            Date of Birth<br />
                            <input
                                type='number'
                                className="month"
                                value={user.month}
                                name="month"
                                placeholder="MM"
                                onChange={handleChange}
                            />
                            <input
                                type='number'
                                className="day"
                                value={user.day}
                                name="day"
                                placeholder="DD"
                                onChange={handleChange}
                            />
                            <input
                                type='number'
                                className="year"
                                value={user.year}
                                name="year"
                                placeholder="Year"
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <br />
                    <label className='em'>
                        Email Address <br />
                        <input
                            className="email"
                            value={user.email}
                            name='email'
                            onChange={handleChange}
                        />
                    </label>
                    <label className="cellPhone">
                        Cell phone Number <br />
                        <input
                            className="cell"
                            value={user.cell}
                            name='cell'
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