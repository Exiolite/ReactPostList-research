import React from 'react';
import classes from './PostButton.module.css'

const PostButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.PostButton}>
            {children}
        </button>
    );
};

export default PostButton;