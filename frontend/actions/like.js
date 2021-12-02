import * as LikeAPI from '../util/like_api';

export const RECEIVE_LIKES = 'RECEIVE_LIKES';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

const receiveLikes = likes => ({
  type: RECEIVE_LIKES,
  likes
});

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

const removeLike = likeId => ({
  type: REMOVE_LIKE,
  likeId
});

export const createLike = like => dispatch => (
  LikeAPI.createLike(like).then(
    like => dispatch(receiveLike(like))
  )
);

export const deleteLike = likeId => dispatch => (
  LikeAPI.deleteLike(likeId).then(
    () => dispatch(removeLike(likeId))
  )
);