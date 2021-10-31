import React from 'react';
import useAuth from "../Hooks/useAuth";
import Service from '../Service/Service';
import './Services.css';


const Services = () => {
    const { services } = useAuth();
    return (
        <div className="container my-5">
            <div className="services">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;