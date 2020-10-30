import React from 'react';
// import { Image } from 'react-native'
// import Layout from '../../shared/Layout/Layout'
import { Link } from 'react-router-dom';
import Nav from '../../components/shared/Nav/Nav'
<<<<<<< HEAD
import "./Home.css";
import AbsenteeImg from '../../Assets/ToDoList.png'
import Calendar from '../../Assets/Calendar.png'
import TrackButton from '../../components/shared/Buttons/TrackYourVoteButton'
import VoteButton from '../../components/shared/Buttons/VoteLinkBtn'
import AbsenteeButton from '../../components/shared/Buttons/AbsenteeBtn'
import CalendarButton from '../../components/shared/Buttons/Calendarbtn'

const Home = () => {
=======
// import TrackerImg from "../../Assets/TrackYourBallotLogo.png";
import './Home.css'
>>>>>>> development

  

<<<<<<< HEAD
  return (
    <div className='homepage'>
      <div>
        <Nav />
      </div>
      <div className='hp-buttons'> 
    
        <TrackButton/>
       
        <VoteButton/>
        
        <AbsenteeButton />
        
        <CalendarButton/>
        {/* <div>
          <a className='link' href="https://vote.nyc/" target='_blanck'>
            Important Dates
          <img src={Calendar} alt='Calendar Img' />
          </a>
       </div> */}
      </div>
    </div>
  
  );
=======
const Home = () => {
    return (
        <div>
            <Nav />
            <body>
                <button className='tracker-btn'>
                    <Link className='tracker-link' > Track Your Ballot </Link>
                </button>
                <button className='vote-btn'>
                    <a href="https://www.vote.org/state/new-york/" target="_blank" rel="noreferrer">
                        Vote.org
                    </a>
                </button>
                <Link className='absentee-link' to="/disclaimer">
                    <button className='absentee-btn'>
                        Absentee Ballot
                    </button>
                </Link>
            </body>
        </div>

    );
>>>>>>> development
};

export default Home;