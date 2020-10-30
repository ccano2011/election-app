import React from 'react';
// import Layout from '../../shared/Layout/Layout'
import { Link } from 'react-router-dom';
import Nav from '../../components/shared/Nav/Nav'
// import TrackerImg from "../../Assets/TrackYourBallotLogo.png";
import './Home.css'


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
};

export default Home;