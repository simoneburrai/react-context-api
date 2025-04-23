import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
