import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import ExperienceIndexItemContainer from './experience_index_item';

class ExperienceIndex extends React.Component {
    render () {
        const { currentUser, match, experiences } = this.props;
        const newExpButton = currentUser == (match.params.id) ? (
            <button>
                <i className="fas fa-plus"></i>
            </button>
        ) : null;
            // console.log(experiences);
        if (!experiences.length) return null;

        let head = (experiences.length > 1) ? (<h1>Experiences</h1>) : (<h1>Experience</h1>)

        return (
            <div className='exp-index'>
                {head}
                {newExpButton}
                <ul>
                    {experiences.map(exp => (
                        <ExperienceIndexItemContainer key={exp.id} experience={exp} />
                    ))}
                </ul>
            </div>
        )
    }
}


const mSTP = ({ session: { currentUser } }) => ({
    currentUser
});

const mDTP = dispatch => ({
    openModal: (modal, id) => dispatch(openModal(modal, id))
});

const ExperienceIndexContainer = withRouter(connect(mSTP, mDTP)(ExperienceIndex));

export default ExperienceIndexContainer;