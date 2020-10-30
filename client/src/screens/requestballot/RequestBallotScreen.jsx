import React, { useState } from 'react';
import './RequestBallotScreen.css';
import Nav from '../../components/shared/Nav/Nav'
//import {createBallot} from '../../services/ballots'

const RequestBallotScreen = () => {

  const [ballot, setBallot] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    apartmentSuite: '',
    city: '',
    state: '',
    zipCode: '',
    dob: '',
    email: '',
    cell:''
  })
  return (
    <div>
      <Nav /> 
      <br/><br/><br/><br/>
      <div className= "ballot-header">
        <h1>Request an Absentee Ballot</h1>
      </div>

      <form className="ballot-form">
               <label>
                First Name
                <input
                    className="firstName"
                    // value={ballot.firstName}
                    name='firstName'
                    required
                    // onChange={handleChange}
                 />
        </label>  
              Last Name
                <label>
                <input
                    className="lastName"
                    placeholder='Last Name'
                    // value={ballot.lastName}
                    name='lastName'
                    required
                    // onChange={handleChange}
          />
        </label>
        <p className = "reg-question">Where are you registered to vote?</p>
        <label>
          Street Address
                <input
                    className="address"
                    // value={ballot.streetAddress}
                    name='streetAddress'
                    required
                    // onChange={handleChange}
          />
        </label>
        <label>
          Apartment/Suite
                <input
                    className="aptSuite"
                    // value={ballot.apartmentSuite}
                    name='author'
                    required
                    // onChange={handleChange}
          />
        </label>
        <label>
          City
                <input
                    className="city"
                    // value={post.city}
                    name='city'
                    required
                    // onChange={handleChange}
          />
        </label>
        <label>
          State
                <input
                    className="state"
                    // value={ballot.state}
                    name='state'
                    required
                    // onChange={handleChange}
          />
        </label>
        <label>
          Zip Code
                <input
                    className="zipCode"
                    // value={ballot.zipCode}
                    name='zipCode'
                    required
                    // onChange={handleChange}
          />
        </label>
        {/* DOB entry */}

        <label>
          Email Address
                <input
                    className="email"
                    // value={ballot.email}
                    name='email'
                    required
                    // onChange={handleChange}
          />
        </label>
        <label>
          Cell phone Number
                <input
                    className="cell"
                    // value={ballot.cell}
                    name='cell'
                    required
                    // onChange={handleChange}
          />
          </label>
        <button type='submit' className="confirm-button">Confirm</button>
        <button type='submit' className="cancel-button">Cancel</button>
        </form>
    </div>
)
}

export default RequestBallotScreen