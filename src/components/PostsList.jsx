import { usePostContext } from "../utils/postContext";
import Post from "./Post";
import './PostsList.css';

const PostsList = () => {
    const { state } = usePostContext();

    return (
        <div className={'list-container container'}>
            {
                state.posts.map((post, index) => (
                    <Post key={index} post={post} />
                ))
            }
        </div>
    )
}

export default PostsList