import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";
import { PostProvider } from "./contexts/PostContext";

function App() {

  const PostProviderLayout = () => {
    return <PostProvider>
      <Outlet />
    </PostProvider>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route element={<PostProviderLayout />}>
            <Route path="/posts" element={<PostPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
