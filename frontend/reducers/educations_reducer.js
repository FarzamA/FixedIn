import { RECEIVE_EDUCATIONS, RECEIVE_EDUCATION, REMOVE_EDUCATION } from "../actions/education_actions";
import { RECEIVE_CURRENT_USER, RECEIVE_USER } from '../actions/session_actions';
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";


const educationsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_CURRENT_USER: 
            return { ...state, ...action.educations };
        case RECEIVE_EDUCATIONS: 
            return { ...state, ...action.educations };
        case RECEIVE_EDUCATION:
            const { id } = action.education;
            return { ...state, [id]: action.education }
        case REMOVE_EDUCATION:
            let nextState = { ...state };
            delete nextState[action.educationId];
            return nextState;
        case RECEIVE_USER:
            return { ...state, ...action.educations };
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};

export default educationsReducer;