import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_COMMENTS:
      const users = { ...action.users }
      return { ...state, ...action.comments, users };
    case RECEIVE_COMMENT:
      return { ...state, ...action.comment };
    case REMOVE_COMMENT:
      let nextState = { ...state };
      delete nextState[action.commentId];
      return nextState;
    default:
      return state;
  }
};


export default commentsReducer;