import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";
import { PostProvider } from "./contexts/PostContext";

function App() {

  return (
    <BrowserRouter>
      <PostProvider>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<PostPage />} />
          </Route>
        </Routes>
      </PostProvider>
    </BrowserRouter>
  )
}

export default App
