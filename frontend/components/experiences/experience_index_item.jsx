import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const ExperienceIndexItem = ({ experience, currentUser, match }) => {
    const editButton = currentUser == match.params.if ? (
        <button className='edit-exp-but'>
            <i className="fas fa-pencil-alt"></i>
        </button>
    ) : null; 

    
}



const mSTP = ({ session: { currentUser } }) => ({
    currentUser
});

const mDTP = dispatch => ({

});

const ExperienceIndexItemContainer = withRouter(connect(mSTP, mDTP)(ExperienceIndexItem));

export default ExperienceIndexItemContainer;