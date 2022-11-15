import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../components/Login';
import '../style/Login.scss';

const Signin = () => {
    return (
        <div className='signin-wrap'>
            <Link to={'/'} className='logo-wrap'>
                <img src="/image/logo.png" alt="logo" />
            </Link>
            <Login />
        </div>
    );
};

export default Signin;