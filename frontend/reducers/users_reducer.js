import { RECEIVE_CURRENT_USER, RECEIVE_USER } from "../actions/session_actions";
import { RECEIVE_CONNECTIONS } from "../actions/connection_actions";
import { RECEIVE_POSTS } from "../actions/post_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return { ...state, ...action.user };
        case RECEIVE_USER:
            return { ...state, ...action.user };
        case RECEIVE_CONNECTIONS:
            return { ...state, ...action.users };
        case RECEIVE_POSTS:
            return { ...state, ...action.users };
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    };
};

export default usersReducer;