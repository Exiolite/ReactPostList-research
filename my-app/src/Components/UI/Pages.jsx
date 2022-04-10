import React from 'react';
import classes from "./Pages.module.css"

const Pages = ({pages, page, setPage}) => {
  return (
    <div className={classes.Pages}>
      {pages.map(o =>
        <span
          className={o === page ? classes.PageCurrent : classes.Page}
          key={o}
          onClick={() => setPage(o)}
        >{o}</span>
      )}
    </div>
  );
};

export default Pages;