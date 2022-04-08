import React, {useState} from 'react';
import PostInput from "./UI/PostInput";
import PostButton from "./UI/PostButton";

const PostForm = ({createPost}) => {
  const [post, setPost] = useState({title: '', description: ''})

  const addNewPost = (e) => {
    e.preventDefault()
    if (post.title === '' || post.description === '') return;

    createPost({id: Date.now(), ...post})
    setPost({...post, title: '', description: ''})
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
          placeholder="Description"
          value={post.description}
          onChange={e => setPost({...post, description: e.target.value})}
        />
        <PostButton onClick={addNewPost}>Create post</PostButton>
      </form>
    </div>
  );
};

export default PostForm;