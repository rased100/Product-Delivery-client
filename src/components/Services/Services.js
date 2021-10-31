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
                    //  mongodb not working I upload first 7 data there is problem
                    // I cannot remove them from mongodb network problem
                    // thats why i use slice(7 to 100)
                    services.slice(7, 100).map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;