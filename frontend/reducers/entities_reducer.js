import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import experiencesReducer from './experiences_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    experiences: experiencesReducer
});

export default entitiesReducer;