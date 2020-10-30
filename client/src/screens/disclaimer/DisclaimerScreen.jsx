import React from 'react';
import './DisclaimerScreen.css';
import Nav from '../../components/shared/Nav/Nav'
import { Link } from "react-router-dom"


function DisclaimerScreen() {
    return (
        <div>
            <Nav />
            <div className="disclaimer">
                <h3>To qualify for absentee ballot you must be: </h3>
                    <ul className="disclaimerUl">
                        <div className="disclaimerList">
                            <li className="disclaimerListContents">• Out of the county where you are registered to vote</li>
                            <li className="disclaimerListContents">• A student living outside of the county</li>
                            <li className="disclaimerListContents">• Serving as an election worker or poll watcher</li>
                            <li className="disclaimerListContents">• Have religious beliefs or practices that prevent from going to a voting center</li>
                        </div>
                    </ul>
                    <div>
                        <Link to="/request-ballot">
                            <button className="disclaimerButton">Request an Absentee Ballot</button>
                        </Link>
                    </div>
            </div>
        </div>
    );
}

export default DisclaimerScreen;