import React from 'react';
import Area from '../Area/Area';
import Earnmoney from '../Earnmoney/Earnmoney';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="banner d-flex align-items-center">
                <h1 className="w-50 p-3 fw-bold">Get your courier delivered with the utmost safety with us</h1>
            </div>
            <Services></Services>
            <Area></Area>
            <Earnmoney></Earnmoney>
        </div>


    );
};

export default Home;