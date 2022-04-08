import React from 'react';

const PostItem = (props) => {
  return (
    <div className='post'>
      <div>
        <strong>{props.post.title}</strong>
        <div className='postContent'>
          <p>{props.post.body}</p>
        </div>
      </div>
      <div className='postButtons'>
        <button onClick={() => props.deletePost(props.post)}>Удалить</button>
      </div>
    </div>
  )
}

export default PostItem;

