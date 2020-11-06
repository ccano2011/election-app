import React from 'react'
import './AccountLandingPage.css'
import Nav from "../../components/shared/Nav/Nav";
import ArrowImg from '../../Assets/left-arrow.svg';
import { Link } from "react-router-dom"

function AccountLandingPage() {
  
  return (
    <div className = "whole-page">
      <Nav />
      <div className='subHeader'>
            <Link to='/'>
              <img className='arrow' src={ArrowImg} alt='arrow' height='25' weight='25' />
            </Link>
            <p className="headline">My Account</p>
      </div>

      <div className = "accountImage">
          {/* image renders from in state */}
      </div>

      <div className="accountInfo">
        {/* Username renders from react state to find username  */}
        {/* Password renders from react state to find username  */}
        <p className="username">Username: </p>
        <p className="password">Password: </p>
        <Link to='/'>
          <p className="logout">Log Out </p>
        </Link>
        {/* button with link to delete account screen */}
        <p className = "delete-account">Delete Account</p>


      </div>
    </div>
  )
}

export default AccountLandingPage