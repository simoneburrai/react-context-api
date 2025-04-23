import { useContext } from "react";
import PostContext from "../contexts/PostContext";

const PostList = () => {
    const posts = useContext(PostContext);
    console.log(posts);

    return <div className="post-container">
        {posts.map(post => {
            return <div className="post" id={post.id}>{post.title}</div>
        })}
    </div>
}

export default PostList;