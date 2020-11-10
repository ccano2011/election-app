import React, { useState, useEffect } from 'react';
import './EditBallotScreen.css';
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
    console.log(isUpdated)

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
            history.push(`/admin`)
        }, 1000)
    }

    return (
        <div className="ballotRequest1">
            <Nav />
            <div className='subHeader1'>
                <Link to='/dashboard'>
                    <img className='arrow1' src={ArrowImg} alt='arrow' height='25' weight='25' />
                </Link>
                <p className="headline1">Edit Your Ballot Request</p>
            </div>
            <div className="ballot-header1">
                <h4>Edit your Request Form</h4>
            </div>
            <div className="ballot-container1">
                <form className="ballot-form1" onSubmit={handleSubmit}>
                    <label className="firstNameLabel1">
                        First Name <br />
                        <input
                            className="firstName1"
                            value={ballot.firstName}
                            name='firstName'
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label className="lastNameLabel1">
                        Last Name <br />
                        <input
                            className="lastName1"
                            value={ballot.lastName}
                            name='lastName'
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <h4 className="reg-question1">Where are you registered to vote?</h4>
                    <label className="street1">
                        Street Address <br />
                        <input
                            className="address1"
                            value={ballot.streetAddress}
                            name='streetAddress'
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label className="apt1">
                        Apartment/Suite <br />
                        <input
                            className="aptSuite1"
                            value={ballot.apartmentSuite}
                            name='author'
                            onChange={handleChange}
                        />
                    </label>
                    <label className="cit1">
                        City <br />
                        <input
                            className="city1"
                            value={ballot.city}
                            name='city'
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label className="stat1">
                        County <br />
                        <input
                            className="county1"
                            value={ballot.county}
                            name='county'
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label className="zip1">
                        Zip Code <br />
                        <input
                            className="zipCode1"
                            value={ballot.zipCode}
                            name='zipCode'
                            required
                            onChange={handleChange}
                        />
                    </label> <br />
                    <div className="dob1">
                        <label>
                            Date of Birth <br />
                            <input
                                className="day1"
                                value={ballot.day}
                                name="day"
                                onChange={handleChange}
                            />
                            <input
                                className="month1"
                                value={ballot.month}
                                name="month"
                                onChange={handleChange}
                            />
                            <input
                                className="year1"
                                value={ballot.year}
                                name="year"
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <br />
                    <label className='em1'>
                        Email Address <br />
                        <input
                            className="email1"
                            value={ballot.email}
                            name='email'
                            onChange={handleChange}
                        />
                    </label>
                    <label className="cellPhone1">
                        Cell Phone Number <br />
                        <input
                            className="cell1"
                            value={ballot.cell}
                            name='cell'
                            onChange={handleChange}
                        />
                    </label>
                    <button type='submit' className="confirm-button1" >Confirm</button>
                    <Link to="/dashboard" ><button className='cancel-button1'>Cancel</button></Link>

                </form>
            </div>
        </div>
    )
}
export default EditBallotScreen