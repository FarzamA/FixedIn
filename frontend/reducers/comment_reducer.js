import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_COMMENTS:
      // console.log({ ...state, ...action.comments, ...action.users }, 'TESTTTT');
      return { ...state, ...action.comments };
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