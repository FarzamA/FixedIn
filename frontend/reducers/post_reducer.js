import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST } from "../actions/post_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const postsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_POSTS:
            // debugger posts are coming in undefined
            return { ...state, ...action.posts }
        case RECEIVE_POST:
            // debugger
            return { ...state, ...action.post};
        case REMOVE_POST:
            let nextState = { ...state };
            delete nextState[action.postId];
            return nextState;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};

export default postsReducer;