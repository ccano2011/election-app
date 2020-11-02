import React from 'react'
import './RequestConfirmedScreen.css'
import Ribbon from '../../Assets/ribbon.png';
import ArrowImg from '../../Assets/left-arrow.svg';
import { Link } from "react-router-dom";


const RequestConfirmedScreen = () => {

  return (
    <div className="ballot-screen">
      <div className='subHeader'>
        <Link to='/request-ballot'>
          <img className='arrow' src={ArrowImg} alt='arrow' height='25' weight='25'/>
         </Link>
        <p className="headline">Request and Absentee Ballot</p>
      </div>
      <div className="confirm-container">
        <img src={Ribbon} className="ribbon" alt="ribbon" />
        <h2>You have requested a ballot!</h2>
      </div>
      <Link to="/"><button className='home-button'>Back to Home</button></Link>
    </div>
  )
}

export default RequestConfirmedScreen