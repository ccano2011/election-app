import React, { useContext } from 'react'
import './AccountLandingPage.css'
import Nav from "../../components/shared/Nav/Nav";
import ArrowImg from '../../Assets/left-arrow.svg';
import { Link } from "react-router-dom"
import CreateUsers from '../../components/createuser/CreateUser'


function AccountLandingPage() {
  const { value } = useContext(CreateUsers)

  return (
    <div className="whole-page">
      <Nav />
      <div className='subHeader'>
        <Link to='/dashboard'>
          <img className='arrow' src={ArrowImg} alt='arrow' height='25' weight='25' />
        </Link>
        <p className="headline">My Account</p>
      </div>

      <div className="accountImage">
        {/* image renders from in state */}
      </div>

      <div className="accountInfo">
        {/* Username renders from react state to find username  */}
        {/* Password renders from react state to find username  */}
        <p className="accountUsername">Username: {value[0]}</p>
        <p className="accountPassword">Password: {value[1]}</p>
        <p className="accountName">Name: {value[2]} {value[3]}</p>
        <Link to='/'>
          <p className="logout">Log Out </p>
        </Link>
        {/* button with link to delete account screen */}
        <Link to='/delete-account'>
          <p className="delete-account">Delete Account</p>
        </Link>
      </div>
    </div>
  )
}

export default AccountLandingPage