import React from 'react';
import './DisclaimerScreen.css';
import Nav from '../../components/shared/Nav/Nav'
import ArrowImg from '../../Assets/left-arrow.svg';
import { Link } from "react-router-dom"


function DisclaimerScreen() {
    return (
        <div>
            <Nav />
            <div className='subHeader'>
                <Link to='/'>
                    <img className='arrow' src={ArrowImg} alt='arrow' height='25' weight='25' />
                </Link>
                <p className="headline">Let's Vote</p>
            </div>
            <div className="disclaimer">
                <h3>To qualify for absentee ballot you must be: </h3>
                <ul className="disclaimerUl">
                    <div className="disclaimerList">
                        <li className="disclaimerListContents">• Being out of the county where you are registered to vote</li>
                        <li className="disclaimerListContents">• Being a student living outside of the county</li>
                        <li className="disclaimerListContents">• Being serving as an election worker or poll watcher</li>
                        <li className="disclaimerListContents">• Serving as an election worker or poll watcher</li>
                        <li className="disclaimerListContents">• Having religious beliefs or practices that prevent from going to a voting center</li>
                    </div>
                </ul> 
            </div>
            <div>
                <Link to="/request-ballot">
                    <button className="request">Request an Absentee Ballot</button>
                </Link>
            </div>
        </div>
    );
}

export default DisclaimerScreen;