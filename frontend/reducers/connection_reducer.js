import { RECEIVE_CONNECTION, RECEIVE_CONNECTIONS, REMOVE_CONNECTION } from "../actions/connection_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const connectionsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_CONNECTIONS:
            // debugger
            return { ...state, ...action.connections };
        case RECEIVE_CONNECTION:
            // debugger
            return { ...state, ...action.connection };
        case REMOVE_CONNECTION:
            let nextState = { ...state };
            delete nextState[action.connectionId];
            return nextState;
        case LOGOUT_CURRENT_USER:
            return {};
        default: 
            return state;
    }
};

export default connectionsReducer;