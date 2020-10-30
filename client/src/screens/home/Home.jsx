import React from 'react';
// import Layout from '../../shared/Layout/Layout'
import { Link } from 'react-router-dom';
// import TrackerImg from "../../Assets/TrackYourBallotLogo.png";



const Home = () => {
  return (
    
      <div>
      <button className='tracker-btn'>
        
        <Link className='tracker-link' > Track Your Ballot </Link>
      </button>
        <button className='vote-btn'><Link className='vote-link' > Vote.org </Link> </button>
        <button className='absentee-btn'><Link className='absentee-link' > Absentee Ballot </Link> </button>
      
    </div>
  
  );
};

export default Home;