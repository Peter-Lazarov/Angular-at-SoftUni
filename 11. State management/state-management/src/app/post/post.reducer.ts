import * as PostAction from './post.action'
import { Post } from './post.type';

export type Action = PostAction.All;

const defaultState = {
    text: 'I am the default text',
    likes: 0
};

//Reducer
export function postReducer(state: Post = defaultState, action: Action) {
    switch (action.type) {
        case PostAction.DOWNVOTE:
            return {
                ...state, likes: state?.likes !== undefined ? state.likes - 1 : 0,
            }
        case PostAction.UPVOTE:
            return {
                ...state, likes: state?.likes !== undefined ? state.likes + 1 : 0,
            }
        case PostAction.EDIT:
            return { ...state, text: action.payload };
        case PostAction.RESET:
            return defaultState;
        default:
            return state;
    }
}
