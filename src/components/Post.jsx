import { usePostContext } from "../utils/postContext";
import './Post.css';


const PostItem = ({post}) => {
    const { dispatch } = usePostContext();
    return (
        <div className={'post'}>
            <h3>{post.title}</h3>
            <button className={'delete-btn'} onClick={() => dispatch({ type: 'removePost', payload: post.id })}>
                <i class="fa-solid fa-square-xmark"></i>
            </button>
        </div>
    )
}

export default PostItem;