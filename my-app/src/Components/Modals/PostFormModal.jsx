import React from 'react';
import classes from "./PostFormModal.module.css"

const PostFormModal = ({children, visible, setVisible}) => {

  const rootClasses = [classes.PostFormModal]
  if (visible) {
    rootClasses.push(classes.active)
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={classes.PostFormModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default PostFormModal;