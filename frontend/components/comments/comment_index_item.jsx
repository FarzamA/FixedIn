import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteComment } from '../../actions/comment_actions';
import { receiveLike, deleteLike } from '../../actions/like';
import { fetchUser } from '../../actions/session_actions';
import { fetchUserLiked, createLike } from '../../util/like_api';
