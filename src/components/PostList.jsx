import { usePosts } from "../contexts/PostContext";


const PostList = () => {
    const posts = usePosts();


    return <div className="post-container">
        {posts.map(post => {
            return <div className="post" key={post.id}>{post.title}</div>
        })}
    </div>
}

export default PostList;