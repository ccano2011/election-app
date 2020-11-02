import React, { useState, useEffect } from 'react';
import './BallotStatusScreen.css'
import Nav from "../../components/shared/Nav/Nav";
import { getRequests} from '../../services/ballotConnect';

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