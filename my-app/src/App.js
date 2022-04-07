import React, {useState} from 'react';
import "./Styles/App.css"
import PostItem from "./Components/PostItem";
import PostsList from "./Components/PostsList";
import PostButton from "./Components/UI/PostButton";
import PostInput from "./Components/UI/PostInput";

function App() {
    const [posts, setPosts] = useState([
    ])

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            id: Date.now(),
            title,
            description,
        }
        setPosts([...posts, newPost])
    }

    return (
        <div className="App">
            <form>
                <PostInput
                    type="text"
                    placeholder="Name"
                    value={title}
                    onChange={setTitle}
                    onChange={e => setTitle(e.target.value)}
                />
                <PostInput
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <PostButton onClick={addNewPost} >Create post</PostButton>
            </form>

            <PostsList posts={posts} title={"Posts"} />
        </div>
    );
}

export default App;
