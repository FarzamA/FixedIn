import * as CommentAPI from '../util/comment_api';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComments = payload => ({
    type: RECEIVE_COMMENTS,
    comments: payload.comments,
    users: payload.users
});
  
const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});
  
const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
});
  
export const fetchTwoComments = postId => dispatch => (
    CommentAPI.fetchTwoComments(postId).then(
        comments => dispatch(receiveComments(comments))
    )
);
  
export const fetchMoreComments = (postId, limit) => dispatch => (
    CommentAPI.fetchMoreComments(postId, limit).then(
        comments => dispatch(receiveComments(comments))
    )
);

export const createComment = comment => dispatch => (
    CommentAPI.createComment(comment).then(
      comment => dispatch(receiveComment(comment))
    )
);
  
export const updateComment = comment => dispatch => (
    CommentAPI.updateComment(comment).then(
        comment => dispatch(receiveComment(comment))
    )
);

export const deleteComment = commentId => dispatch => (
    CommentAPI.deleteComment(commentId).then(
        () => dispatch(removeComment(commentId))
    )
);