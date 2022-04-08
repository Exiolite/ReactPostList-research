import React from 'react';
import PostInput from "./UI/PostInput";
import PostSortSelector from "./UI/PostSortSelector";
import classes from "./PostFilter.module.css"

const PostFilter = ({filter, setFilter}) => {
  return (
    <div className={classes.PostFilter}>
      <PostInput
        value={filter.searchQuery}
        onChange={e => setFilter({...filter, searchQuery: e.target.value})}
        placeholder="Search"
      />
      <PostSortSelector
        value={filter.sortType}
        onChange={selectedSortType => setFilter({...filter, sortType: selectedSortType})}
        defaultValue={"Сортировка"}
        options={[
          {value: "title", name: "From Title"},
          {value: "body", name: "From body"},
        ]}
      />
    </div>
  );
};

export default PostFilter;