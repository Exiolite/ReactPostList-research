import {useMemo} from "react";

export const useSortedPosts = (posts, sortType) => {
    const sortedPosts = useMemo(() => {
        if (sortType) {
            return [...posts].sort((a, b) => a[sortType].localeCompare(b[sortType]))
        }
        return posts
    }, [sortType, posts])

    return sortedPosts
}

export const usePosts = (posts, sortType, searchQuery) => {
    const sortedPosts = useSortedPosts(posts, sortType)
    const sortedSearchedPosts = useMemo(() => {
        return sortedPosts.filter(o => o.title.toLowerCase().includes(searchQuery))
    }, [searchQuery, posts])

    return sortedSearchedPosts
}