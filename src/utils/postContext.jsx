import { createContext, useContext, useReducer } from 'react';
import postReducer, { initialState } from '../reducer/postReducer.jsx';

const PostContext = createContext();

const PostContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(postReducer, initialState);

    return (
        <PostContext.Provider value={{ state, dispatch}}>
            {children}
        </PostContext.Provider>
    );
};

export const usePostContext = () => {
    return useContext(PostContext);
};

export default PostContextProvider;