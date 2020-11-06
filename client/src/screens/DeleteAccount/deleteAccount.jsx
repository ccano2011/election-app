import React from 'react';
import './deleteAccount.css'
import Nav from "../../components/shared/Nav/Nav";
import ArrowImg from '../../Assets/left-arrow.svg';
import { Link } from "react-router-dom"


function deleteAccount(props) {
  return (
    <div>
      <Nav />
      <div className='subHeader'>
            <Link to='/'>
              <img className='arrow' src={ArrowImg} alt='arrow' height='25' weight='25' />
            </Link>
            <p className="headline">DELETE ACCOUNT</p>
      </div>
      <div className='delete-p'>
        <p>Are you sure you would like to delete your account?</p>
      </div>
      <div className='buttons'>
      <div className='cancel-btn'>
          <Link to="/"><button className="cancelAccountBtn" >Cancel</button></Link>
      </div>
      <div className='delete-btn'>
        <button className="deleteAccountBtn" >Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default deleteAccount;