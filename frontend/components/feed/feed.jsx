import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUser } from '../../actions/session_actions';

class Feed extends React.Component {

}

const mSTP = ({ entities: { users }, session: { currentUser, userConnection } }) => ({
    currentUser: users[currentUser],
    userConnection
});

const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId))
});

const FeedContainer = connect(mSTP, mDTP)(Feed);

export default FeedContainer;