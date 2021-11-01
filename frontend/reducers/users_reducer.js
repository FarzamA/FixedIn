import { RECEIVE_CURRENT_USER, RECEIVE_USER } from "../actions/session_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return { ...state, ...action.user };
        case RECEIVE_USER:
            return { ...state, ...action.user };
        default:
            return state;
    };
};

export default usersReducer;