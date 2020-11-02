import React, { useState } from 'react';
import './RequestBallotScreen.css';
import Nav from '../../components/shared/Nav/Nav'
import { createRequest } from '../../services/ballotConnect.js'
import {Link, Redirect} from "react-router-dom"

const RequestBallotScreen = () => {

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
    cell:''
  })

  const [isCreated, setCreated] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const created = await createRequest(ballot)
    setCreated({created})
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setBallot({
      ...ballot,
      [name]: value
    })
  } 
  if (isCreated) {
    return <Redirect to={`/request-confirmed`} />
}
  return (
    <div className = "ballotRequest">
      <Nav /> 
      
      <div className= "ballot-header">
        <h4>Request an Absentee Ballot</h4>
      </div>
      <div className = "ballot-container">
      <form className="ballot-form" onSubmit = {handleSubmit}>
          <label className="first">
            
                First Name <br/>
                <input
                    className="firstName"
                    value={ballot.firstName}
                    name='firstName'
                    required
                    onChange={handleChange}
                 />
          </label>  
          <label className="last">
              Last Name <br/>
                <input
                    className="lastName"
                    value={ballot.lastName}
                    name='lastName'
                    required
                    onChange={handleChange}
          />
          </label>
          <br/>
        <h4 className = "reg-question">Where are you registered to vote?</h4>
        <label className = "street">
          Street Address <br/>
                <input
                    className="address"
                    value={ballot.streetAddress}
                    name='streetAddress'
                    required
                    onChange={handleChange}
          />
        </label>
        <label className = "apt">
          Apartment/Suite <br/>
                <input
                    className="aptSuite"
                    value={ballot.apartmentSuite}
                    name='author'
                    onChange={handleChange}
          />
        </label>
        <label className = "cit">
          City <br/>
                <input
                    className="city"
                    value={ballot.city}
                    name='city'
                    required
                    onChange={handleChange}
          />
        </label>
        <label className = "stat">
          State <br/>
                <input
                    className="state"
                    value={ballot.state}
                    name='state'
                    required
                    onChange={handleChange}
          />
        </label>
        <label className = "zip">
          Zip Code <br/>
                <input
                    className="zipCode"
                    value={ballot.zipCode}
                    name='zipCode'
                    required
                    onChange={handleChange}
          />
          </label> <br />
          <div className = "dob">
          <label>
            Date of Birth <br/>
             <input
              className="day"
              value={ballot.day}
              name="day"
              onChange = {handleChange}
            />
            <input
              className="month"
              value={ballot.month}
              name="month"
              onChange = {handleChange}
            />
            <input
              className="year"
              value={ballot.year}
              name="year"
              onChange = {handleChange}
            />
            </label>
            </div>
          <br/>
        <label className = 'em'>
          Email Address <br/>
                <input
                    className="email"
                    value={ballot.email}
                    name='email'
                    onChange={handleChange}
          />
        </label>
        <label className = "cellPhone">
          Cell phone Number <br/>
                <input
                    className="cell"
                    value={ballot.cell}
                    name='cell'
                    onChange={handleChange}
          />
          </label>
        <button type='submit' className="confirm-button">Confirm</button>
        <button className = 'cancel-button'><Link to="/">Cancel</Link></button>
        </form>
        </div>
    </div>
)
}
export default RequestBallotScreen