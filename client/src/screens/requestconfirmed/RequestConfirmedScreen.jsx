import React, { useState, useEffect } from 'react'
import './RequestConfirmedScreen.css'
import Ribbon from '../../Assets/ribbon.png';
import { getRequests } from '../../services/ballotConnect';
import ArrowImg from '../../Assets/left-arrow.svg';
import { Link } from "react-router-dom";

const RequestConfirmedScreen = (props) => {
  console.log(props)
  // const [post, setPost] = useState(null)

  const [ballotReq, setBallotReq] = useState([]);
  // const [isLoaded, setLoaded] = useState(false)

  useEffect(() => {
    const ballotData = async () => {
      const ballotDataApi = await getRequests()
      setBallotReq(ballotDataApi)
      // setRenderReq(ballotDataApi)
    }
    ballotData();
  }, [props.isLoaded])

  let mappingTime = ballotReq.map(function (id) {
    return id._id
  })
  console.log(mappingTime)

  const redirect = `/edit-ballot/${mappingTime.slice(-1)}`
  console.log(redirect)

  return (
    <div className="ballot-screen">
      <div className='subHeader'>
        <Link to={redirect}>
          <img className='arrow' src={ArrowImg} alt='arrow' height='25' weight='25' />
        </Link>
        <p className="headline">Request Confirmed</p>
      </div>
      <div className="confirm-container">
        <img src={Ribbon} className="ribbon" alt="ribbon" />
        <h2 className='text'>You have requested a ballot!</h2>
      </div>
      <div><Link to="/dashboard"><button className='home-button'>Back to Home</button></Link></div>
      <div><Link to={redirect}><button className='edit-button'>Edit your ballot</button></Link></div>
    </div>
  )
}

export default RequestConfirmedScreen