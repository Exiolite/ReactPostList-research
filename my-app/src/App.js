import React, {useMemo, useState} from 'react';
import "./Styles/App.css"
import PostsList from "./Components/PostsList";
import PostForm from "./Components/PostForm";
import PostFilter from "./Components/PostFilter";

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sortType: "", searchQuery: ""})

  const sortedPosts = useMemo(() => {
    if (filter.sortType) {
      return [...posts].sort((a, b) => a[filter.sortType].localeCompare(b[filter.sortType]))
    }
    return posts
  }, [filter.sortType, posts])

  const sortedSearchedPosts = useMemo(() => {
    return sortedPosts.filter(o => o.title.toLowerCase().includes(filter.searchQuery))
  }, [filter, posts])

  const createPost = (post) => {
    setPosts([...posts, post])
  }

  const deletePost = (post) => {
    setPosts(posts.filter(o => o.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm createPost={createPost} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostsList
        deletePost={deletePost}
        posts={sortedSearchedPosts}
        title={"Posts"}
      />
    </div>
  );
}

export default App;
