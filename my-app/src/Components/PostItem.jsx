import React from 'react';
import {useNavigate} from "react-router-dom"

const PostItem = (props) => {
  const router = useNavigate()
  console.log(router)

  return (
    <div className='post'>
      <div>
        <strong>{props.post.id} {props.post.title}</strong>
        <div className='postContent'>
          <p>{props.post.body}</p>
        </div>
      </div>
      <div className='postButtons'>
        <button onClick={() => props.deletePost(props.post)}>Удалить</button>
        <button onClick={() => props.deletePost(props.post)}>Открыть</button>
      </div>
    </div>
  )
}

export default PostItem;

