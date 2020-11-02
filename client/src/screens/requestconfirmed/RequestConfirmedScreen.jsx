import React, { useState, useEffect } from 'react'
import './RequestConfirmedScreen.css'
import Ribbon from '../../Assets/ribbon.png';
import { Link } from "react-router-dom";
import { getRequest, updateRequest } from '../../services/ballotConnect.js'

const RequestConfirmedScreen = (props) => {
  const [post, setPost] = useState(null)
  return (
    <div className="ballot-screen">
      <div className="confirm-container">
        <img src={Ribbon} className="ribbon" alt="ribbon" />
        <h2>You have requested a ballot!</h2>
      </div>
      <Link to="/"><button className='home-button'>Back to Home</button></Link>
    </div>
  )
}

export default RequestConfirmedScreen