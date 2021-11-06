import { combineReducers } from "redux";
import modalReducer from "./modal_reducer";
import filterReducer from "./filter";

const uiReducer = combineReducers({
    modal: modalReducer,
    filter: filterReducer
});

export default uiReducer;