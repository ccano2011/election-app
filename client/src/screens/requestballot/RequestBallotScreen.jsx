import React, { useState, useContext } from 'react';
import './RequestBallotScreen.css';
import Nav from '../../components/shared/Nav/Nav'
import { createRequest } from '../../services/ballotConnect.js'
import { Link, useHistory } from "react-router-dom"
//ToggleDisplay from an npm package I found online
// import ToggleDisplay from 'react-toggle-display'
import ArrowImg from '../../Assets/left-arrow.svg';
import CreateUsers from '../../components/createuser/CreateUser'



const RequestBallotScreen = () => {
  const { value } = useContext(CreateUsers)

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

  const [isCreated, setCreated] = useState(false)
  console.log(isCreated)

  const handleChange = (event) => {
    const { name, value } = event.target
    setBallot({
      ...ballot,
      [name]: value
    })
  }

  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const created = await createRequest(ballot)
    setCreated({ created })
    setTimeout(() => {
      history.push(`/request-confirmed`)
    }, 1000)
  }

  return (
    <div className="ballotRequest2">
      <Nav />
      <div className='subHeader2'>
        <Link to='/dashboard'>
          <img className='arrow2' src={ArrowImg} alt='arrow' height='25' weight='25' />
        </Link>
        <p className="headline2">Re-enter Your Info to Request an Absentee Ballot</p>
      </div>
      <div className="ballot-header2">
        {/* <h4>Request an Absentee Ballot</h4> */}
      </div>
      {/* <div><h1>Sumbitting...</h1></div> */}
      <div className="ballot-container2">
        <form className="ballot-form2" onSubmit={handleSubmit}>
          <label className="firstNameLabel2">
            First Name <br />
            <input
              className="firstName2"
              value={ballot.firstName}
              name='firstName'
              placeholder={value[2]}
              required
              onChange={handleChange}
            />
          </label>
          <label className="lastNameLabel2">
            Last Name <br />
            <input
              className="lastName2"
              value={ballot.lastName}
              name='lastName'
              placeholder={value[3]}
              required
              onChange={handleChange}
            />
          </label>
          <br />
          <h4 className="reg-question2">Where are you registered to vote?</h4>
          <label className="info2">
            Street Address <br />
            <input
              className="address2"
              value={ballot.streetAddress}
              name='streetAddress'
              placeholder={value[4]}
              required
              onChange={handleChange}
            />
          </label>
          <label className="info2">
            Apartment/Suite <br />
            <input
              className="aptSuite2"
              value={ballot.apartmentSuite}
              name='apartmentSuite'
              onChange={handleChange}
            />
          </label>
          <label className="info2">
            City <br />
            <input
              className="city2"
              value={ballot.city}
              placeholder={value[5]}
              name='city'
              required
              onChange={handleChange}
            />
          </label>
          <label className="info2">
            County <br />
            <input
              className="county2"
              value={ballot.county}
              placeholder={value[6]}
              name='county'
              required
              onChange={handleChange}
            />
          </label>
          <label className="info2">
            Zip Code <br />
            <input
              className="zipCode2"
              type='number'
              value={ballot.zipCode}
              name='zipCode'
              placeholder={value[7]}
              required
              onChange={handleChange}
            />
          </label> <br />
          <div className="dob2">
            <label>
              Date of Birth (MM/DD/Year)<br />
              <input
                type='number'
                className="month2"
                value={ballot.month}
                placeholder={value[10]}
                name="month"
                // placeholder="MM"
                onChange={handleChange}
              />
              <input
                type='number'
                className="day2"
                value={ballot.day}
                placeholder={value[11]}
                name="day"
                // placeholder="DD"
                onChange={handleChange}
              />
              <input
                type='number'
                className="year2"
                value={ballot.year}
                placeholder={value[12]}
                name="year"
                // placeholder="Year"
                onChange={handleChange}
              />
            </label>
          </div>
          <br />
          <label className='info2'>
            Email Address <br />
            <input
              className="email2"
              value={ballot.email}
              name='email'
              placeholder={value[8]}
              onChange={handleChange}
            />
          </label>
          <label className="info2">
            Cell phone Number <br />
            <input
              className="cell2"
              value={ballot.cell}
              placeholder={value[9]}
              name='cell'
              onChange={handleChange}
            />
          </label>
          <button type='submit' className="confirm-button2" >Confirm</button>
          <Link to="/dashboard"><button className='cancel-button2'>Cancel</button></Link>
        </form>
      </div>
    </div>
  )
}
export default RequestBallotScreen