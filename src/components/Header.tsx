import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.scss';

const Header = () => {
    return (
        <div className='header-wrap'>
            <div className='logo-wrap'>
                <Link to={'/'} className='logo-wrap'>
                    <img src="/image/logo.png" alt='로고' />
                    <span className='title-text'><span>BERRY</span>TALK</span>
                </Link>
                <Link to={'/signin'} className='sign-btn login-btn'>LOGIN</Link>
                <span style={{ color: '#3D4EC3' }}>|</span>
                <Link to={'/signup'} className='sign-btn signup-btn'>SIGN UP</Link>
            </div>
        </div>
    );
};

export default Header;