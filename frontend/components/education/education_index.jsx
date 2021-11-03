import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EducationIndexItemContainer from './education_index_item';

class EducationIndex extends React.Component {
    render() {
        const { currentUser, match, educations } = this.props;
        const newEduButton = currentUser == (match.params.id ? (
            <button>
                <i className="fas fa-plus"></i>
            </button>
        ) : null);

        if (!educations.length) return null;

        return (
            <div className='edu-index'>
              <h1>Education</h1>
              {newEduButton}
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

});

const EducationIndexContainer = withRouter(connect(mapSTP, mapDTP)(EducationIndex));
export default EducationIndexContainer;