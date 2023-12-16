import "./CardPages.css"
import { useEffect, useState } from "react";
import axios from "axios";

function CardPages() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("https://dummyjson.com/posts?limit_10");
                setPosts(response.data.posts);
            } catch (error) {
                console.error("Ошибка при получении постов:", error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div className="card-block">
            {posts.map((post) => (
                <div className="post-card" key={post.id}>
                    <h3>{post.title}</h3>
                    <hr/>
                    <span>{post.body}</span>
                </div>
            ))}
        </div>
    );
}

export default CardPages;
