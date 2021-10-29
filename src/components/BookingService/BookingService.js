import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const BookingService = () => {
    const { services } = useAuth();
    const { bookingId } = useParams();

    console.log('service2', services[bookingId - 1])
    console.log(bookingId)

    return (
        <div className="container d-flex justify-content-around bg-secondary my-5">
            <div>
                <input className="form-control m-2 mt-5" type="text" placeholder="Your name" />
                <input className="form-control m-2" type="text" placeholder="Your address" />
                <input className="form-control m-2" type="text" placeholder="Your email" />
                <input className="form-control m-2" type="text" placeholder="Your phone" />
                <input className="btn btn-danger form-control m-2" type="submit" value="Place Order" />
            </div>
            <div className="w-50">
                <img src={services[bookingId - 1].image} className="img-fluid" alt="" />
                <h2>{services[bookingId - 1].sl}. {services[bookingId - 1].serviceName}</h2>
                <p>{services[bookingId - 1].description}</p>
            </div>
        </div>
    );
};


export default BookingService;