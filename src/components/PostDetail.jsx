import React from 'react';
import {useParams} from "react-router-dom";
import { usePostContext } from "../utils/postContext";

const PostDetail = () =>{
    const {id} = useParams();
    const {state} = usePostContext();

    const post = state.posts.find((post) => post.id === id) ?? {title: '', content: ''};

    return(
        <div>
            <h1>Post Detail</h1>
            <div>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
            </div>
        </div>
    )
}

export default PostDetail;