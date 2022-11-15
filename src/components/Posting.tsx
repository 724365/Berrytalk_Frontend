import React from 'react';
import '../style/Posting.scss';

const Posting = () => {
    return (
        <div className='post-wrap'>
            <div className='posting-wrap'>
                <span className='post-title'>게시글 작성</span>
                <button className='post-btn'>
                    <svg width="10" height="10" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.3 6.175L12.05 1.975L13.45 0.575C13.8333 0.191667 14.3043 0 14.863 0C15.421 0 15.8917 0.191667 16.275 0.575L17.675 1.975C18.0583 2.35833 18.2583 2.821 18.275 3.363C18.2917 3.90433 18.1083 4.36667 17.725 4.75L16.3 6.175ZM14.85 7.65L4.25 18.25H0V14L10.6 3.4L14.85 7.65Z" fill="white" />
                    </svg>
                    <span>게시</span></button>
            </div>
            <textarea className='post-input' placeholder=''></textarea>
        </div>
    );
};

export default Posting;