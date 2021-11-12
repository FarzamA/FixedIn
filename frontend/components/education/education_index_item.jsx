import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { openModal } from '../../actions/modal_actions'

const EducationIndexItem = ({ education, currentUser, match, openModal }) => {
    // add an onclick of the dispatched action to the button
    // console.log(education);
    const edit = currentUser == (match.params.id) ? (
        <button onClick={() => openModal('editEdu', education.id)}> 
            <i className="fas fa-pencil-alt"></i>
        </button>
    ) : null;

    let strStart;
    let strEnd; 
    let eduTime;
        // console.log(education);
    if (education.startDate) {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        const startDateEdu = new Date(`${education.startDate}`);

        const endDateEdu = new Date(`${education.endDate}`);

        const startMonth = months[startDateEdu.getMonth()];
        const startYear = startDateEdu.getFullYear();
        const endMonth = months[endDateEdu.getMonth()];
        const endYear = endDateEdu.getFullYear();

        strStart = `${startMonth} ${startYear}`;
        strEnd = education.endDate ? `${endMonth} ${endYear}` : 'Present';

        eduTime = <p className='edu-time'>{strStart} - {strEnd}</p>;
    };

    return (
        <div className='profile-edu'>
            <img src={window.edu} /> 
            <p className='school'>{education.school}</p>
            <p className='degree'>{education.degree}</p>
            <p className='field'>{education.field}</p>
            {eduTime}
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
    openModal: (modal, id) => dispatch(openModal(modal, id)),
    dispatch
});

const EducationItemContainer = withRouter(connect(mSTP, mDTP)(EducationIndexItem));

export default EducationItemContainer;