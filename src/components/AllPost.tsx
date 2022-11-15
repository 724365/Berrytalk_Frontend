import React from 'react';
import '../style/AllPost.scss';

const AllPost = () => {
    return (
        <div className='allpost-wrap'>
            <div className='post-title-wrap'>
                <span className='post-title'>게시글 목록</span>
            </div>
            <div className='map-wrap'>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index): any => (
                    <div className='article-wrap'>
                        <span className='article-title'>{'솔직히'}<span>{'박우빈'}</span></span>
                        <span className='article-content'>{'nosdvnkjdnsvdklsnvkdsnbkdnbkndslbk'}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllPost;