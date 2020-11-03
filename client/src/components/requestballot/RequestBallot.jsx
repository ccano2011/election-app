import React from 'react';
import { Link } from 'react-router-dom'

const Requests = (props) => {
    return (
        <Link className="ballotReq" to={`/admin/${props._id}`}>
            <div className="firstName">{props.firstName}</div>
            <div className="lastName">{props.lastName}</div>
            <div className="streetAddress">{props.streetAddress}</div>
            <div className="apartmentSuite">{props.apartmentSuite}</div>
            <div className="city">{props.city}</div>
            <div className="county">{props.county}</div>
            <div className="zipCode">{props.zipCode}</div>
            <div className="day">{props.day}</div>
            <div className="month">{props.month}</div>
            <div className="year">{props.year}</div>
            <div className="email">{props.email}</div>
            <div className="cell">{props.cell}</div>
        </Link>
    )
}
export default Requests