import { createContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useContext } from "react";

const PostContext = createContext();


const urlApi = "https://jsonplaceholder.typicode.com/posts"

const PostProvider = ({ children }) => {

    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        axios.get(urlApi)
            .then(response => setPosts(response.data))
    }

    useEffect(getPosts, [])


    return <PostContext.Provider value={posts}>
        {children}
    </PostContext.Provider>
}


const usePosts = () => {
    return useContext(PostContext);
}


export { usePosts, PostProvider };