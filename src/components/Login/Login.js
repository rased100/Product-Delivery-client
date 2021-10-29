import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="container w-25">
                <input className="form-control m-2 mt-5" type="email" placeholder="Your email" />
                <input className="form-control m-2" type="password" placeholder="Your password" />
                <input className="btn btn-info form-control m-2" type="submit" value="Submit" />
                <div className="m-5">------ or ------</div>
                <button
                    /* onClick={handleGoogleSignInHistory} */
                    className="btn btn-info form-control m-2 mb-5">Sign in with google</button>


            </div>
        </div>
    );
};

export default Login;