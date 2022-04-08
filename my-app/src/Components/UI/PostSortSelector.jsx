import React from 'react';
import classes from "./PostSortSelector.module.css"

const PostSortSelector = ({options, defaultValue, value, onChange}) => {
  return (
    <select
      className={classes.PostSortSelector}
      value={value}
      onChange={e => onChange(e.target.value)}
    >
      <option disabled value="">{defaultValue}</option>
      {options.map(o =>
        <option key={o.value} value={o.value}>
          {o.name}
        </option>
      )}
    </select>
  );
};

export default PostSortSelector;