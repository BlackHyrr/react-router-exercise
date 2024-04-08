import { usePostContext } from "../utils/postContext"
import './Input.css';

const Input = () => {
    const { state, dispatch } = usePostContext();
    const error = state.errorMessage;

    const handleTitleChange = (e) => {
        dispatch({ type: 'setTitle', payload: e.target.value });
    };

    const handleContentChange = (e) => {
        dispatch({ type: 'setContent', payload: e.target.value });
    };

    const handleAddPost = () => {
        if (state.input.title.trim() && state.input.content.trim()) {
            dispatch({ type: 'addPost' })
        } else {
            dispatch({ type: 'error', payload: 'Please add a title and a content for your post.' })
        }
    };

    return (
        <>
            <div className={'form-container'}>
                <div className={'form container'}>
                    <input
                        type='text'
                        placeholder='Add a title'
                        value={state.input.title}
                        onChange={handleTitleChange}
                    />
                    <textarea
                        rows={13}
                        placeholder="Add a content"
                        value={state.input.content}
                        onChange={handleContentChange}
                    />
                    <button
                        className={'add-btn'}
                        onClick={handleAddPost}>Ajouter</button>
                </div>
                {
                    error !== '' && <p className={'error-message'}>{error}</p>
                }
            </div>
        </>
    )
}

export default Input