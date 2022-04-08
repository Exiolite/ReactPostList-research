import React, {useState} from 'react';
import PostInput from "./UI/PostInput";
import PostButton from "./UI/PostButton";

const PostForm = ({createPost}) => {
  const [post, setPost] = useState({title: '', body: ''})

  const addNewPost = (e) => {
    e.preventDefault()
    if (post.title === '' || post.body === '') return;

    createPost({id: Date.now(), ...post})
    setPost({...post, title: '', body: ''})
  }

  return (
    <div>
      <form>
        <PostInput
          type="text"
          placeholder="Name"
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
        />
        <PostInput
          type="text"
          placeholder="body"
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
        />
        <PostButton onClick={addNewPost}>Create post</PostButton>
      </form>
    </div>
  );
};

export default PostForm;