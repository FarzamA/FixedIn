import * as SessionAPI from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

export const loginUser = user => dispatch => (
    SessionAPI.loginUser(user).then(
        user => dispatch(receiveCurrentUser(user)),
        // still needs to be written and imported from reducers
        errors => dispatch(receiveSessionErrors(errors.responseJSON))
    )
);