import React, { useState } from 'react';
import Nav from '../../components/shared/Nav/Nav'
import { createUser } from '../../services/usersConnect.js'
import { Link, useHistory } from "react-router-dom"
import ArrowImg from '../../Assets/left-arrow.svg';


const CreateAccountScreen = () => {

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

    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const created = await createUser(user)
        setCreated({ created })
        setTimeout(() => {
            history.push(`/`)
        }, 1000)
    }

    return (
        <div className="createAccountDiv">
            <Nav />
            <div className='subHeader'>
                <Link to='/'>
                    <img className='arrow' src={ArrowImg} alt='arrow' height='25' weight='25' />
                </Link>
                <p className="headline">Create an Account</p>
            </div>
            <div className="user-header">
                {/* <h4>Request an Absentee Ballot</h4> */}
            </div>
            {/* <div><h1>Sumbitting...</h1></div> */}
            <div className="user-container">
                <form className="user-form" onSubmit={handleSubmit}>
                    <label className="user">
                        Username: <br />
                        <input
                            className="username"
                            value={user.username}
                            name='username'
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label className="last">
                        Password: <br />
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