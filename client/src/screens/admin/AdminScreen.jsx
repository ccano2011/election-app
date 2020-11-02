import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Request from '../../components/requestballot/RequestBallot';
import { getRequests, deleteRequest } from '../../services/ballotConnect';
import { useParams } from 'react-router-dom'

function AdminScreen(props) {
    const [ballotReq, setBallotReq] = useState([]);
    // const [renderReq, setRenderReq] = useState([]);
    // const [post, setPost] = useState(null)
    const [isLoaded, setLoaded] = useState(false)

    const { id } = useParams()


    useEffect(() => {
        const ballotData = async () => {
            const ballotDataApi = await getRequests()
            setBallotReq(ballotDataApi)
            // setRenderReq(ballotDataApi)
        }
        ballotData();
    }, [])
    if (!ballotReq.length) {
        return <h4>загрузка</h4>
    }
    console.log(ballotReq)

    const handleDelete = async (id) => {
        await deleteRequest(ballotReq._id)
        setLoaded(!isLoaded)
    };

    // props.list.map((movie) => (
    //     <div className="mappedContent" key={movie.id}>
    //         <img id="pickPoster" src={movie.fields.poster} alt={"poster for" + movie.fields.title} /> <br />
    //         <p id="title" >{movie.fields.title} <br /></p>
    //         <button className="listButton" onClick={() => handleDelete(movie.id)}>Remove from My List</button>
    //         <p id="plotSummary">{movie.fields.plotSummary} <br /></p>
    //         <p id="userScore" >User ratings: {movie.fields.userRating}/10</p>


    // ));
    return (
        <div>
            <div className="renderedData">
                {
                    ballotReq.map((post, index) => (
                        <div key={index}>
                            _id={post._id}
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
                            <button onClick={() => handleDelete(id)}> Delete Ballot Request</button>
                        </div>)
                    )}
            </div>
        </div>
    )
}
export default AdminScreen;