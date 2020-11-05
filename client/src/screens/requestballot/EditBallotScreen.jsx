import React, { useState, useEffect } from 'react';
import './RequestBallotScreen.css';
import Nav from '../../components/shared/Nav/Nav'
import { updateRequest, getRequest } from '../../services/ballotConnect.js'
import { Link, useHistory, useParams } from "react-router-dom"
//ToggleDisplay from an npm package I found online
import ArrowImg from '../../Assets/left-arrow.svg';


const EditBallotScreen = (props) => {
    const [ballot, setBallot] = useState({
        firstName: '',
        lastName: '',
        streetAddress: '',
        apartmentSuite: '',
        city: '',
        state: '',
        zipCode: '',
        day: '',
        month: '',
        year: '',
        email: '',
        cell: ''
    })
    const [isUpdated, setUpdated] = useState(false)
    let params = useParams();
    console.log(params.id)

    const handleChange = (event) => {
        const { name, value } = event.target
        setBallot({
            ...ballot,
            [name]: value
        })
    }

    useEffect(() => {
        const fetchPost = async () => {
            const post = await getRequest(params.id)
            setBallot(post)
        }
        fetchPost()
    }, [params.id])

    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const updated = await updateRequest(params.id, ballot)
        setUpdated({ updated })
        setTimeout(() => {
            history.push(`/request-confirmed`)
        }, 1000)
    }

    return (
        <div className="ballotRequest">
            <Nav />
            <div className='subHeader'>
                <Link to='/'>
                    <img className='arrow' src={ArrowImg} alt='arrow' height='25' weight='25' />
                </Link>
                <p className="headline">Edit Your Ballot Request</p>
            </div>
            <div className="ballot-header">
                <h4>Edit your Request Form</h4>
            </div>
            <div className="ballot-container">
                <form className="ballot-form" onSubmit={handleSubmit}>
                    <label className="first">
                        First Name <br />
                        <input
                            className="firstName"
                            value={ballot.firstName}
                            name='firstName'
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label className="last">
                        Last Name <br />
                        <input
                            className="lastName"
                            value={ballot.lastName}
                            name='lastName'
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
                            value={ballot.streetAddress}
                            name='streetAddress'
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label className="apt">
                        Apartment/Suite <br />
                        <input
                            className="aptSuite"
                            value={ballot.apartmentSuite}
                            name='author'
                            onChange={handleChange}
                        />
                    </label>
                    <label className="cit">
                        City <br />
                        <input
                            className="city"
                            value={ballot.city}
                            name='city'
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label className="stat">
                        County <br />
                        <input
                            className="county"
                            value={ballot.county}
                            name='county'
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label className="zip">
                        Zip Code <br />
                        <input
                            className="zipCode"
                            value={ballot.zipCode}
                            name='zipCode'
                            required
                            onChange={handleChange}
                        />
                    </label> <br />
                    <div className="dob">
                        <label>
                            Date of Birth <br />
                            <input
                                className="day"
                                value={ballot.day}
                                name="day"
                                onChange={handleChange}
                            />
                            <input
                                className="month"
                                value={ballot.month}
                                name="month"
                                onChange={handleChange}
                            />
                            <input
                                className="year"
                                value={ballot.year}
                                name="year"
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <br />
                    <label className='em'>
                        Email Address <br />
                        <input
                            className="email"
                            value={ballot.email}
                            name='email'
                            onChange={handleChange}
                        />
                    </label>
                    <label className="cellPhone">
                        Cell Phone Number <br />
                        <input
                            className="cell"
                            value={ballot.cell}
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
export default EditBallotScreen