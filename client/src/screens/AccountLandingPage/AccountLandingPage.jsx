import React, { useContext } from 'react'
import './AccountLandingPage.css'
import Nav from "../../components/shared/Nav/Nav";
import ArrowImg from '../../Assets/left-arrow.svg';
import { Link } from "react-router-dom";
import CreateUsers from '../../components/createuser/CreateUser';
import AccountImg from '../../Assets/ExampleProfileImage.png';


function AccountLandingPage(props) {
  const { value } = useContext(CreateUsers)

  return (
    <div className="whole-page">
      <Nav />
      <div className="subHeader">
        <Link to="/dashboard">
          <img
            className="arrow"
            src={ArrowImg}
            alt="arrow"
            height="25"
            weight="25"
          />
        </Link>
        <p className="headline">My Account</p>
      </div>

      <img className='accountImage' src={AccountImg} alt='account' />

      <div className="accountInfo">
        {/* Username renders from react state to find username  */}
        {/* Password renders from react state to find username  */}
        <p className="accountUsername">Username: {value[0]}</p>
        <p className="accountPassword">Password: {value[1]}</p>
        <p className="accountName">Name: {value[2]} {value[3]}</p>
        <Link style={{ textDecoration: 'none' }} to='/'>
          <button className="logout">Log Out </button>
        </Link>
        {/* button with link to delete account screen */}
        <Link style={{ textDecoration: 'none' }} to='/delete-account'>
          <button className="delete-account">Delete Account</button>
        </Link>
      </div>
    </div>
  );
}

export default AccountLandingPage;
