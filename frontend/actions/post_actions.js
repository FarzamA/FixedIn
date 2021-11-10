import * as PostAPI from '../util/post_api';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const receivePosts = payload => ({
    type: RECEIVE_POSTS,
    posts: payload.posts,
    users: payload.users
});

export const receivePost = post => ({
    type: RECEIVE_POST,
    post
});

export const removePost = postId => ({
    type: REMOVE_POST,
    postId
});

export const fetchPosts = (offset) => dispatch => (
    PostAPI.fetchPosts(offset).then(posts => dispatch(receivePosts(posts)))
);

export const fetchPost = postId => dispatch => (
    PostAPI.fetchPost(postId).then(post => dispatch(receivePost(post)))
);

export const createPost = formData => dispatch => (
    PostAPI.createPost(formData).then(post => dispatch(receivePost(post)),
    error => console.log(error.responseText))
);

export const updatePost = post => dispatch => (
    PostAPI.updatePost(post).then(post => dispatch(receivePost(post)))
);

export const deletePost = postId => dispatch => (
    PostAPI.deletePost(postId).then(() => dispatch(removePost(postId)))
);