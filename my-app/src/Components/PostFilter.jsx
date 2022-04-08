import React from 'react';
import PostInput from "./UI/PostInput";
import PostSortSelector from "./UI/PostSortSelector";

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
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
          {value: "description", name: "From Description"},
        ]}
      />
    </div>
  );
};

export default PostFilter;