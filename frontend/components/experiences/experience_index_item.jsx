import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';



const mSTP = ({ session: { currentUser } }) => ({
    currentUser
});

const mDTP = dispatch => ({

});

const ExperienceIndexItemContainer = withRouter(connect(mSTP, mDTP)(ExperienceIndexItem));

export default ExperienceIndexItemContainer