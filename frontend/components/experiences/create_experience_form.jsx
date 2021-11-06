import { connect } from 'react-redux';
import { createExperience } from '../../actions/experience_actions';
import ExperienceForm from './experience_form';

const mSTP = ({session: { currentUser }}) => ({
    experience: {
        userId: currentUser,
        title: '',
        company: '',
        location: '',
        startDate: '',
        endDate: '',
        industry: '',
        headline: '',
        description: ''
    },
    formType: 'Add experience'
});

const mDTP = dispatch => ({
    processForm: experience => dispatch(createExperience(experience))
});

const CreateExperienceForm = connect(mSTP, mDTP)(ExperienceForm);

export default CreateExperienceForm;

