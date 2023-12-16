import "./CreatePages.css"
import { useState, useEffect } from "react";
import axios from "axios";

function CreatePost() {
    const [postData, setPostData] = useState({
        title: "",
        body: "",
        userId: 1,
    });

    useEffect(() => {
        const createPost = async () => {
            try {
                const response = await axios.post("https://dummyjson.com/posts/add", postData);
                console.log("Пост успешно создан:", response.data.posts);
            } catch (error) {
                console.error("Ошибка при оп=тправки поста:", error);
            }
        };
        createPost();
    }, [postData]);

    return (
        <div className="create-block">
            <form>
                <div className='block-title'>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={postData.title}
                        onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                    />
                </div>
                <div className="block-body">
                    <label>Body:</label>
                    <input
                        value={postData.body}
                        onChange={(e) => setPostData({ ...postData, body: e.target.value })}
                    />
                </div>
                <button type="submit">Create Post</button>
            </form>
        </div>
    );
}

export default CreatePost;
