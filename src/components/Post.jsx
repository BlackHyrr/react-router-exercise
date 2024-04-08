import { NavLink } from "react-router-dom";
import { usePostContext } from "../utils/postContext";
import './Post.css';
import { generatePath } from "../utils/generatePath";


const Post = ({post}) => {
    const { dispatch } = usePostContext();
    return (
        <div className={'post'}>
            <h3><NavLink to={generatePath('PostDetail', { id: post.id })}>{post.title}</NavLink></h3>
            <button className={'delete-btn'} onClick={() => dispatch({ type: 'removePost', payload: post.id })}>
                <i className={"fa-solid fa-square-xmark"}></i>
            </button>
        </div>
    )
}

export default Post;