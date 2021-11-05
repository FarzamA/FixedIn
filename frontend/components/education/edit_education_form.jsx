import { connect } from 'react-redux';
import { deleteEducation, updateEducation } from '../../util/education_api';
import EducationForm from './education_form';

const mSTP = ({ entities: { educations }, ui: { filter }}) => ({
    education: educations[filter],
    formType: 'Edit education'
});

const mDTP = dispatch => ({
    processForm: education => dispatch(updateEducation(education)),
    deleteEducation: educationId => dispatch(deleteEducation(educationId))
});

const EditEducationForm = connect(mSTP, mDTP)(EducationForm);

export default EditEducationForm;