import React from 'react';
import PostItem from './PostItem';

const PostsList = ({posts, title, deletePost}) => {
  if (posts.length) {
    return (
      <div>
        <h1>{title}</h1>
        {posts.map(post =>
          <PostItem post={post} deletePost={deletePost} key={post.id}/>
        )}
      </div>
    )
  }
  return (
    <div>
      <h1>Posts not found</h1>
    </div>
  );
};

export default PostsList;