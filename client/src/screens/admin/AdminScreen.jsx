import React, { useState, useEffect } from 'react';
import { getRequests, deleteRequest } from '../../services/ballotConnect';
import { Link } from "react-router-dom"
import "./AdminScreen.css"

function AdminScreen(props) {
    const [ballotReq, setBallotReq] = useState([]);
    const [isLoaded, setLoaded] = useState(false)

    useEffect(() => {
        const ballotData = async () => {
            const ballotDataApi = await getRequests()
            setBallotReq(ballotDataApi)
            // setRenderReq(ballotDataApi)
        }
        ballotData();
    }, [isLoaded])

    console.log(ballotReq)

    if (!ballotReq.length) {
        return <h4>будь терпелив, товарищ</h4>
    }

    const handleDelete = async (id) => {
        await deleteRequest(id)
        setLoaded(!isLoaded)
    };

    return (
        <div>
            <div className="renderedData">
                {
                    ballotReq.map((post, index) => (
                        <div className="mappedContent" key={index}>
                            {/* _id={post._id} */}
                            <p className="info">{post.firstName} {post.lastName}</p>
                            <p className="info">{post.streetAddress}, {post.city}</p>
                            <p className="info">{post.apartmentSuite}</p>
                            <p className="info">{post.county}, {post.zipCode}</p>
                            <p className="info">{post.month}/{post.day}/{post.year}</p>
                            <p className="info">{post.email}</p>
                            <p className="info">{post.cell}</p>
                            <Link to={`/edit-ballot/${post._id}`}><button className="disclaimerButton">Edit this ballot</button></Link>
                            <button className="disclaimerButton" onClick={() => handleDelete(post._id)}> Delete Ballot Request</button>
                        </div>)
                    )}
            </div>
        </div>
    )
}
export default AdminScreen;