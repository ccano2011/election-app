import React, { useState, useEffect } from 'react';
import { getRequests, deleteRequest } from '../../services/ballotConnect';

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
                        <div key={index}>
                            {/* _id={post._id} */}
                            <p>{post.firstName}</p>
                            <p>{post.lastName}</p>
                            <p>{post.streetAddress}</p>
                            <p>{post.apartmentSuite}</p>
                            <p>{post.city}</p>
                            <p>{post.state}</p>
                            <p>{post.zipCode}</p>
                            <p>{post.day}</p>
                            <p>{post.month}</p>
                            <p>{post.year}</p>
                            <p>{post.email}</p>
                            <p>{post.cell}</p>
                            <button onClick={() => handleDelete(post._id)}> Delete Ballot Request</button>
                        </div>)
                    )}
            </div>
        </div>
    )
}
export default AdminScreen;