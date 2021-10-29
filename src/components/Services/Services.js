import React from 'react';
import useAuth from "../Hooks/useAuth";
import Service from '../Service/Service';


const Services = () => {
    const { services } = useAuth();
    return (
        <div className="container mt-5">
            <h1>Our Services</h1>
            <div className="services">
                {
                    services.map(service => <Service key={service.sl} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;