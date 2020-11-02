import React, { useState, useEffect } from 'react';
import './BallotStatusScreen.css'
import Nav from "../../components/shared/Nav/Nav";
import { getRequests} from '../../services/ballotConnect';
import ArrowImg from '../../Assets/left-arrow.svg';
import { Link } from "react-router-dom"

function BallotStatusScreen(props) {
  const [ballotReq, setBallotReq] = useState([]);

  useEffect(() => {
    const ballotData = async () => {
        const ballotDataApi = await getRequests()
        setBallotReq(ballotDataApi)
        // setRenderReq(ballotDataApi)
    }
    ballotData();
}, [])
  
  return (
    <div >
      <div>
        <Nav/>
        <div className='subHeader'>
          <Link to='/'>
              <img className='arrow' src={ArrowImg} alt='arrow' height='25' weight='25'/>
            </Link>
            <p className="headline">Track Your Vote</p>
        </div>
      </div>
      <div className='status'>
      <div className='logo-background'>
        <h1>LOADING BAR</h1>
      </div>
      <div className='text-status'>
          <p className='vote-date'>
            <span>Your vote is set to be processed and counted by  </span>
            <span style={{fontWeight: "bold"}}>November 3rd, 2020</span>
         </p>
          
       
        </div>
      </div>
    </div>
  );
}

export default BallotStatusScreen;