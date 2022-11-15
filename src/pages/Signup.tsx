import React from 'react';
import { Link } from 'react-router-dom';
import SignupBox from '../components/SignupBox';
import '../style/Login.scss';

const Signin = () => {
    return (
        <div className='signin-wrap'>
            <Link to={'/'} className='logo-wrap'>
                <img src="/image/logo.png" alt="logo" />
            </Link>
            <SignupBox />
        </div>
    );
};

export default Signin;