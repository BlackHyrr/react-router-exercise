import { v4 as uuidv4 } from 'uuid';

export const initialState = {
    input: {
        id: 0,
        title: '',
        content: ''
    },
    posts: [],
    errorMessage: ''
}

const postReducer = (state, action) => {

    switch(action.type) {

        case 'setTitle':
            return { ...state, input: { ...state.input, title: action.payload } };

        case 'setContent':
            return { ...state, input: { ...state.input, content: action.payload } };

        case 'addPost':
            if(state.input.title.trim() === '' || state.input.content.trim() === '') {
                return {
                    ...state,
                    errorMessage: 'Veuillez remplir tous les champs.'
                }
            }
            const newPost = {
                id: uuidv4(),
                title: state.input.title,
                content: state.input.content
            };
            return {
                ...state,
                input: {
                    title: '',
                    content: ''
                },
                posts: [...state.posts, newPost],
                errorMessage: ''
            }

        case 'error':
            return {
                ...state,
                errorMessage: action.payload
            }

        case 'removePost':
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.payload)
            }

        default:
            return state;
    }
}

export default postReducer