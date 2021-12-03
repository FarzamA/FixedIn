import React from 'react';
import { connect } from 'react-redux';
import { fetchCommentCount } from '../../util/comment_api';
import { fetchTwoComments, fetchMoreComments } from '../../actions/comment_actions';