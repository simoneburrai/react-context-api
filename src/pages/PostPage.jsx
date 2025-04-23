import PostList from "../components/PostList";

const PostPage = () => {
    return <main>
        <div className="post-container">
            <h1>Lista dei Post</h1>
            <PostList />
        </div>
    </main>
}

export default PostPage;