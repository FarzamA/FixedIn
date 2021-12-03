import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import experiencesReducer from './experiences_reducer';
import educationsReducer from "./educations_reducer";
import connectionsReducer from "./connection_reducer";
import postsReducer from "./post_reducer";
import likesReducer from "./like_reducer";
import commentsReducer from "./comment_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    experiences: experiencesReducer,
    educations: educationsReducer,
    connections: connectionsReducer,
    comments: commentsReducer,
    likes: likesReducer,
});

export default entitiesReducer;