import React from 'react';

const PostItem = (props) => {
    return (
        <div className='post'>
            <div>
                <strong>{props.post.id}. {props.post.title}</strong>
                <div className='postContent'>
                    <p>{props.post.description}</p>
                </div>
            </div>
            <div className='postButtons'>
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default PostItem;