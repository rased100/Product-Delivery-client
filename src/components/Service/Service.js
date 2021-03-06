import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { serviceName, description, image, sl } = props.service;
    const url = `/service/${sl}`;
    return (
        <div className="service">
            <div>
                <img className="img-fluid" src={image} alt="" />
                <h3>{serviceName}</h3>
                <p>{description}</p>
                <Link to={url}><button className="btn btn-primary mb-3">Book Now</button></Link>
            </div>
        </div>
    );
};

export default Service;