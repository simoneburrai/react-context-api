import { createContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useContext } from "react";

const PostContext = createContext();


const urlApi = "https://jsonplaceholder.typicode.comfdf/posts"

const PostProvider = ({ children }) => {

    const [posts, setPosts] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [load, setLoad] = useState(false)

    const getPosts = () => {
        setLoad(true)
        axios.get(urlApi)
            .then(response => {
                setPosts(response.data);
                setErrorMessage(null)
            })
            .catch(() => setErrorMessage("Errore nel caricamento della Pagina"))
            .finally(() => setLoad(false))
    }

    useEffect(getPosts, [])


    return <PostContext.Provider value={posts}>
        {load && <div>Caricamento in Corso</div>}
        {errorMessage && <div className="error-alert">{errorMessage}</div>}
        {posts && children}
    </PostContext.Provider>
}


const usePosts = () => {
    return useContext(PostContext);
}


export { usePosts, PostProvider };