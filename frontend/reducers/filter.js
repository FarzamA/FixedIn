import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal_actions";

const filterReducer = (state = null, action) => {
    Object.freeze(state);

    switch(action.type) {
        case OPEN_MODAL:
            return action.id;
        case CLOSE_MODAL:
            return null; 
        default: 
            return state;
    }
};

export default filterReducer;