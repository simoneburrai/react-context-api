import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";
import PostContext from "./contexts/PostContext";
import { useEffect, useState } from "react";
import axios from "axios";


const urlApi = "https://jsonplaceholder.typicode.com/posts"

function App() {


  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    axios.get(urlApi)
      .then(response => setPosts(response.data))
  }

  useEffect(getPosts, [])

  console.log(posts);


  return (
    <BrowserRouter>
      <PostContext.Provider value={posts}>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<PostPage />} />
          </Route>
        </Routes>
      </PostContext.Provider>
    </BrowserRouter>
  )
}

export default App
