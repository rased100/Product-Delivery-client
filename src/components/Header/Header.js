import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user)
    return (
        <div className="p-3 d-flex justify-content-evenly align-items-center">
            <div>
                <h2><span className="text-danger fw-bold">CURRENT</span> <span className="title">Delivery</span></h2>

            </div>
            <div>
                <NavLink className="header-link" to="/home">home</NavLink>
                <NavLink className="header-link" to="/about">about</NavLink>
                <NavLink className="header-link" to="/manageallorders">manage-all-orders</NavLink>
                <NavLink className="header-link" to="/newservice">new-service</NavLink>
                <NavLink className="header-link" to="/contact">contact</NavLink>
            </div>
            <div>
                {user?.displayName ?
                    <span>
                        <span className="mx-3">
                            User Name: {user.displayName}
                        </span>
                        <span>
                            <button onClick={logOut} className="btn btn-info">Logout</button>
                        </span>
                    </span>

                    :
                    <NavLink className="header-link" to="/login">Login</NavLink>
                }
            </div>
        </div>
    );
};

export default Header;