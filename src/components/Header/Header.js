import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="p-3 d-flex justify-content-evenly align-items-center">
            <div>
                <h2><span className="text-danger fw-bold">CURRENT</span> <span className="title">Delivery</span></h2>

            </div>
            <div>
                <NavLink className="header-link" to="/home">Home</NavLink>
                <NavLink className="header-link" to="/about">About</NavLink>
                <NavLink className="header-link" to="/contact">Contact</NavLink>
            </div>
            <div>
                <NavLink className="header-link" to="/login">Login</NavLink>
            </div>
        </div>
    );
};

export default Header;