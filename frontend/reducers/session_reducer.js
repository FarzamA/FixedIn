import {
    RECEIVE_CURRENT_USER,
    RECEIVE_USER,
    LOGOUT_CURRENT_USER
} from '../actions/session_actions';

const _nullSession = {
    currentUser: null,
    // importing this from the json remember
    userConnections: 0,
    // to hold any signup data in the future
    signUp: {}
};

const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    let payloadUser;

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            payloadUser = Object.values(action.user)[0];
            return { currentUser: payloadUser.id, userConnections: payloadUser.connections };
        case RECEIVE_USER:
            
        default: 
            return state;
    }
}