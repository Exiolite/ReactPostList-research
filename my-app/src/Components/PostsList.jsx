import React from 'react';
import PostItem from './PostItem';
import TransitionGroup from "react-transition-group/cjs/TransitionGroup";
import CSSTransition from "react-transition-group/cjs/CSSTransition";

const PostsList = ({posts, title, deletePost}) => {
    if (posts.length) {
        return (
            <div>
                <h1>{title}</h1>
                <TransitionGroup>
                    {posts.map(post =>
                        <CSSTransition
                            key={post.id}
                            timeout={1000}
                            classNames="post"
                        >
                            <PostItem post={post} deletePost={deletePost}/>
                        </CSSTransition>
                    )}
                </TransitionGroup>
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