import React, {useEffect, useState} from 'react';
import {usePosts} from "../hooks/usePosts";
import {usePagination} from "../hooks/usePagination";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import PostFilter from "../Components/PostFilter";
import PostFormModal from "../Components/Modals/PostFormModal";
import PostForm from "../Components/PostForm";
import PostButton from "../Components/UI/PostButton";
import Loader from "../Components/UI/Loader";
import PostsList from "../Components/PostsList";
import Pages from "../Components/UI/Pages";


const Posts = () => {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sortType: "", searchQuery: ""})
  const [isPostFormVisible, setIsPostFormVisible] = useState(false)
  const sortedSearchedPosts = usePosts(posts, filter.sortType, filter.searchQuery)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const pages = usePagination(totalPages)

  const [fetchPosts, isPostsLoading, postFetchingErrorMessage] = useFetching(async () => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalPostsCount = response.headers["x-total-count"]
    setTotalPages(Math.ceil(totalPostsCount / limit))
  })

  useEffect(() => {
    fetchPosts()
  }, [page])

  const createPost = (post) => {
    setPosts([...posts, post])
    setIsPostFormVisible(false);
  }

  const deletePost = (post) => {
    setPosts(posts.filter(o => o.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
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
      {postFetchingErrorMessage && <h1>{postFetchingErrorMessage}</h1>}
      {isPostsLoading
        ? <Loader/>
        : <PostsList
          deletePost={deletePost}
          posts={sortedSearchedPosts}
          title={"Posts"}
        />}
      <Pages pages={pages} page={page} setPage={changePage}/>
    </div>
  );
};

export default Posts;