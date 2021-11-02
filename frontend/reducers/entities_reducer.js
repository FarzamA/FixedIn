import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import experiencesReducer from './experiences_reducer';
import educationsReducer from "./educations_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    experiences: experiencesReducer,
    educations: educationsReducer
});

export default entitiesReducer;