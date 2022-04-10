import React from 'react';
import "./Styles/App.css"
import About from "./Paths/About";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Posts from "./Paths/Posts";

function App() {

  return (
    <BrowserRouter>
      <div>
        <Link to={"/posts"}>Posts</Link>
        <Link to={"/about"}>About</Link>
      </div>
      <Routes>
        <Route path={"/posts"} element={<Posts/>}/>
        <Route path={"/about"} element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
