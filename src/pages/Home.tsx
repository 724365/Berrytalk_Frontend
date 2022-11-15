import React from 'react';
import AllPost from '../components/AllPost';
import Header from '../components/Header';
import Posting from '../components/Posting';
import '../style/Home.scss';

const Home = () => {
    return (
        <div className='home-wrap'>
            <Header />
            <Posting />
            <AllPost />
        </div>
    );
};

export default Home;