import React, {useEffect, useState} from 'react';
import "./Styles/App.css"
import PostsList from "./Components/PostsList";
import PostForm from "./Components/PostForm";
import PostFilter from "./Components/PostFilter";
import PostFormModal from "./Components/Modals/PostFormModal";
import PostButton from "./Components/UI/PostButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sortType: "", searchQuery: ""})
  const [isPostFormVisible, setIsPostFormVisible] = useState(false)
  const sortedSearchedPosts = usePosts(posts, filter.sortType, filter.searchQuery)
  const [isPostsLoading, setIsPostLoading] = useState(false)

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    setIsPostLoading(true)
    const posts = await PostService.getAll()
    setPosts(posts)
    setIsPostLoading(false)
  }

  const createPost = (post) => {
    setPosts([...posts, post])
    setIsPostFormVisible(false);
  }

  const deletePost = (post) => {
    setPosts(posts.filter(o => o.id !== post.id))
  }

  return (
    <div className="App">
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostFormModal visible={isPostFormVisible} setVisible={setIsPostFormVisible}>
        <PostForm createPost={createPost}/>
      </PostFormModal>
      <PostButton onClick={() => setIsPostFormVisible(true)}>
        Create post
      </PostButton>
      {isPostsLoading ?
        <div>Posts loading</div>
        :
        <PostsList
          deletePost={deletePost}
          posts={sortedSearchedPosts}
          title={"Posts"}
        />
      }

    </div>
  );
}

export default App;
