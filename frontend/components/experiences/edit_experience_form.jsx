import { connect } from "react-redux";
import { updateExperience, deleteExperience } from'../../actions/experience_actions';
import ExperienceForm from './experience_form';

const mSTP = ({ entities: { experiences }, ui: { filter } }) => ({
    experience: experiences[filter],
    formType: 'Edit experience'
});

const mDTP = dispatch => ({
    processForm: experience => dispatch(updateExperience(experience)),
    deleteExperience: experienceId => dispatch(deleteExperience(experienceId))
});

const EditExperienceForm = connect(mSTP, mDTP)(ExperienceForm);

export default EditExperienceForm;