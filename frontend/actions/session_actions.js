import * as SessionAPI from '../util/session_api_util'
import { RECEIVE_SESSION_ERRORS } from '../reducers/session_errors_reducer';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';


export const receiveCurrentUser = payload => ({
    type: RECEIVE_CURRENT_USER,
    user: payload.user,
    experiences: payload.experiences,
    educations: payload.educations
})

export const receiveUser = payload => ({
    type: RECEIVE_USER,
    USER: payload.user,
    experiences: payload.experiences,
    educations: payload.education
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});
// might need to clear errors was having trouble with that on benchbnb 

export const createUser = user => dispatch => (
    SessionAPI.createUser(user).then(
        user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveSessionErrors(errors.responseJSON))
    )
);

export const updateUser = user => dispatch => (
    SessionAPI.updateUser(user).then(
        user => dispatch(receiveUser(user))
    )
);

export const loginUser = user => dispatch => (
    SessionAPI.loginUser(user).then(
        user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveSessionErrors(errors.responseJSON))
    )
);

export const logoutUser = () => dispatch => (
    SessionAPI.logoutUser().then(
        () => dispatch(logoutCurrentUser),
        errors => dispatch(receiveSessionErrors(errors.responseJSON))
    )
);