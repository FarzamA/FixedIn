import React from 'react';
import { connect } from 'react-redux';
import { receivePosts } from '../../actions/post_actions';
import { fetchPosts } from '../../util/post_api';
import PostIndexItemContainer from './post_index_item'

const mSTP = ({ entities: { posts }}) => ({
    post: Object.values(posts).sort((a, b) => Date.parse(a.createdAt) > Date.parse(b.createdAt) ? -1 : 1)
})