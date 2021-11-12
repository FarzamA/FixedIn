import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import EducationIndexItemContainer from './education_index_item';

class EducationIndex extends React.Component {
    render() {
        // console.log(this.currentUser);
        const { currentUser, match, educations } = this.props;
        const newEduButton = currentUser == (match.params.id) ? (
            <button onClick={() => this.props.openModal('createEdu')} className='open-edu'>
                <i className="fas fa-plus"></i>
            </button>
        ) : null;

        if (!educations.length) return null;

        let head = (educations.length > 1) ? (<h1>Previous Educations</h1>) : (<h1>Education</h1>)

        return (
            <div className='edu-index'>
            <div className='head-div'>
                {head}
                {newEduButton}
            </div>
                
              <ul>
                {educations.map(edu => (
                  <EducationIndexItemContainer key={edu.id} education={edu}/>
                  ))}
              </ul>
            </div>
        );
    }

}

const mapSTP = ({ session: { currentUser } }) => ({
    currentUser
});

const mapDTP = dispatch => ({
    openModal: (modal, id) => dispatch(openModal(modal, id))
});

const EducationIndexContainer = withRouter(connect(mapSTP, mapDTP)(EducationIndex));
export default EducationIndexContainer;