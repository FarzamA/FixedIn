import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const EducationIndexItem = ({ education, currentUser, match }) => {
    // add an onclick of the dispatched action to the button
    console.log(education);
    const edit = currentUser == match.params.id ? (
        <button> 
            <i className="fas fa-pencil-alt"></i>
        </button>
    ) : null;

    return (
        <div className='profile-edu'>
            <p className='school'>{education.school}</p>
            <p className='degree'>{education.degree}</p>
            <p className='field'>{education.field}</p>
            <p className='date'>{education.start_date} - {education.end_date}</p>
            <p className='gpa'>{education.gpa}</p>
            <p className='activities'>{education.activities ? `Activities & Societies: ${education.activities}` : null}</p>
            <p className='description'>{education.description ? `Description: ${education.description}` : null}</p>
            {edit}
        </div>
    )
}


const mSTP = ({ session: { currentUser }}) => ({
    currentUser
});

const mDTP = dispatch => ({
    // whatever action that will execute on edit
});

const EducationItemContainer = withRouter(connect(mSTP, mDTP)(EducationIndexItem));

export default EducationItemContainer;