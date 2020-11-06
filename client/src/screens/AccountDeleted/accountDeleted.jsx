import React from 'react';
import './accountDeleted.css'
// import Nav from "../../components/shared/Nav/Nav"
import ArrowImg from '../../Assets/left-arrow.svg';
import { Link } from "react-router-dom"


function accountDeleted(props) {
  return (
    <div>
      {/* <Nav /> */}
      <div className='emptyNav'></div>
      <div className='deletedSubHeader'>
        <Link to='/'>
          <img className='arrow' src={ArrowImg} alt='arrow' height='25' weight='25' />
        </Link>
        <p className="deletedHeadline">Account Deleted</p>
      </div>
      <div className='deleted-p'>
        <p>Sorry to see you go!</p>
      </div>
      <div className='button'>
        <Link to='/'><button className='backHomeBtn'>Home</button></Link>
      </div>


    </div>
  );
}

export default accountDeleted;