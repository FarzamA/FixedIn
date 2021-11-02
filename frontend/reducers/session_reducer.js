import {
    RECEIVE_CURRENT_USER,
    RECEIVE_USER,
    LOGOUT_CURRENT_USER,
    RECEIVE_USER_EMAIL,
    RECEIVE_USER_NAME,
    RECEIVE_USER_LOCATION,
    RECEIVE_USER_JOB,
    RECEIVE_USER_STUDENT
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
    let prevSignUp = state.signUp;
    let payloadUser;

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            payloadUser = Object.values(action.user)[0];
            return { currentUser: payloadUser.id, userConnections: payloadUser.connections };
        case RECEIVE_USER:
            // debugger
            //to grab the connection count
            payloadUser = Object.values(action.user)[0];
            return { ...state, userConnections: payloadUser.connections };
        case LOGOUT_CURRENT_USER:
            return { currentUser: null, userConnections: 0, signUp: {} };
        case RECEIVE_USER_EMAIL:
            return { ...state, signUp: { ...prevSignUp, ...action.email } };
        case RECEIVE_USER_NAME:
            return { ...state, signUp: { ...prevSignUp, ...action.name } };
        case RECEIVE_USER_LOCATION:
            return { ...state, signUp: { ...prevSignUp, ...action.location } };
        case RECEIVE_USER_JOB:
            return { ...state, signUp: { ...prevSignUp, ...action.job } };
        case RECEIVE_USER_STUDENT:
            return { ...state, signUp: { ...prevSignUp, ...action.student } };
        default: 
            return state;
    }
};

export default sessionReducer;